/**
 * @author Sergey Kozlov <skozlov@usetech.com>
 */

import {
    ComponentType,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from 'react';

import { Icon, InputText } from '..';
import { InputTextProps } from '../InputText/InputText';

import './Suggest.scss';
import { SuggestItem, SuggestItemProps } from './components/SuggestItem';
import { SuggestEmpty, SuggestEmptyProps } from './components/SuggestEmpty';
import classNames from 'classnames';

export interface SuggestProps<Value> {
    // custom logic for search suggestions
    onSuggestionsFetchRequested?(inputValue: string): Value[];
    // suggestion values
    suggestions: Value[];
    // props for InputText component
    inputProps: InputTextProps;
    // get value for suggestion
    getSuggestionValue<T>(suggestion: Value): string;
    // callback for selected value
    onChange?(suggestion: Value | null): void;
    // set your own components
    components?: SuggestComponents<Value>;
    // message when result empty
    noSuggestMessage?: string;
    defaultValue?: Value;
}

export type SuggestComponents<Value> = {
    SuggestItem?: ComponentType<SuggestItemProps<Value>>;
    SuggestEmpty?: ComponentType<SuggestEmptyProps>;
};

const renderIcon = {
    name: 'triangle',
    size: 9,
    color: 'var(--color-blue-grey-500)',
};

const Suggest = <T,>({
    inputProps,
    suggestions,
    getSuggestionValue,
    components,
    onChange,
    onSuggestionsFetchRequested,
    noSuggestMessage = 'No results',
    defaultValue,
}: SuggestProps<T>) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] =
        useState<T[]>(suggestions);
    const [activeValue, setActiveValue] = useState<Map<T, boolean>>(
        () => new Map(defaultValue ? [[defaultValue, true]] : undefined)
    );

    const suggestComponents = {
        SuggestItem,
        SuggestEmpty,
        ...components,
    };

    const inputRef = useRef<HTMLInputElement | null>(null);

    const { value: inputValue = '' } = inputProps;

    const parentNodeInput = inputRef.current?.parentNode as
        | HTMLDivElement
        | undefined;

    const widthParentNodeInput =
        parentNodeInput?.getBoundingClientRect().width || null;

    useEffect(() => {
        const newFilteredSuggestions =
            onSuggestionsFetchRequested?.(inputValue) ||
            suggestions.filter((suggestion) =>
                getSuggestionValue(suggestion)
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
            );
        setFilteredSuggestions(newFilteredSuggestions);
    }, [inputValue]);

    /**
     * 1. когда у нас есть выбранное значение и мы меняем его, но не выбираем новое, при закрытии необходимо вернуть старое значение в поле инпута
     */
    useEffect(() => {
        if (!showSuggestions && activeValue.size > 0) {
            const [suggestion] = [...activeValue][0];
            inputProps.onChange?.(getSuggestionValue(suggestion));
        }
        if (
            (!showSuggestions &&
                activeValue.size === 0 &&
                inputValue.length > 0) ||
            (!showSuggestions &&
                activeValue.size > 0 &&
                inputValue.length === 0)
        ) {
            inputProps.onChange?.('');
            setActiveValue(new Map());
        }
    }, [showSuggestions]);

    const handleSelectedSuggestion = (suggestion: T) => {
        setFilteredSuggestions(suggestions);
        setShowSuggestions(false);
        onChange?.(suggestion);
        inputProps.onChange?.(getSuggestionValue(suggestion));

        const newActive = new Map([[suggestion, true]]);
        setActiveValue(newActive);
    };

    const handleToggleOpenSuggest = () => {
        if (inputProps.disabled) {
            return;
        }
        setShowSuggestions((prevState) =>
            inputValue.length === 0 ? !prevState : true
        );
    };

    const handleClickOutside = () => {
        document.removeEventListener('mousedown', handleClickOutside);
        setShowSuggestions(false);
    };

    const handleMouseLeave = () => {
        document.addEventListener('mousedown', handleClickOutside);
    };

    const handleMouseEnter = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

    const handleClearValue = (e: SyntheticEvent) => {
        e.stopPropagation();
        inputProps.onChange?.('');
        setActiveValue(new Map());
        onChange?.(null);
    };

    return (
        <div
            className={'unique-suggestion'}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <div className={'suggest-input'} onClick={handleToggleOpenSuggest}>
                <InputText
                    iconRight={renderIcon}
                    className={classNames({
                        dropped: showSuggestions,
                    })}
                    {...inputProps}
                    value={inputValue}
                    ref={inputRef}
                />
                {activeValue.size > 0 && !inputProps.disabled && (
                    <div className={'icon-clear'} onClick={handleClearValue}>
                        <Icon
                            size={20}
                            color="var(--color-blue-grey-400)"
                            name="circle-close"
                        />
                    </div>
                )}
            </div>
            {showSuggestions && (
                <div
                    className={classNames('suggestion-values', {
                        empty: filteredSuggestions.length === 0,
                    })}
                    style={{
                        width:
                            widthParentNodeInput !== null
                                ? `${widthParentNodeInput}px`
                                : '',
                    }}
                >
                    {filteredSuggestions.length > 0 &&
                        filteredSuggestions.map((suggestion, idx) => (
                            <div
                                key={idx}
                                onClick={(e) =>
                                    handleSelectedSuggestion(suggestion)
                                }
                            >
                                <suggestComponents.SuggestItem
                                    suggestion={suggestion}
                                    getSuggestionValue={getSuggestionValue}
                                    isActive={activeValue.get(suggestion)}
                                />
                            </div>
                        ))}
                    {filteredSuggestions.length === 0 && (
                        <suggestComponents.SuggestEmpty
                            message={noSuggestMessage}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Suggest;
