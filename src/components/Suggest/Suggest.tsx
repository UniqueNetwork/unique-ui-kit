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
import {
    SuggestItem,
    SuggestItemProps,
    SuggestEmpty,
    SuggestEmptyProps,
    SuggestList,
    SuggestWrapper,
    SuggestWrapperProps,
    SuggestListProps,
} from './components';
import classNames from 'classnames';
import { useIsFirstRender } from '../../utils/hooks';

export interface SuggestProps<Value> {
    // function will call every time need to update suggestions
    onSuggestionsFetchRequested?(inputValue: string): Value[];
    // suggestion values
    suggestions: Value[];
    // props for InputText component
    inputProps: Required<Pick<InputTextProps, 'onChange' | 'value'>> &
        Pick<
            InputTextProps,
            'disabled' | 'iconLeft' | 'iconRight' | 'placeholder' | 'error'
        >;
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
    SuggestWrapper?: ComponentType<SuggestWrapperProps<Value>>;
    SuggestList?: ComponentType<SuggestListProps<Value>>;
};

const renderIcon = {
    name: 'triangle',
    size: 9,
    color: 'var(--color-blue-grey-500)',
};

const KEY_CODE = {
    ESC: 27,
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
    const { value: inputValue = '' } = inputProps;
    const [showSuggestions, setShowSuggestions] = useState(false);

    const [activeValue, setActiveValue] = useState<Map<T, boolean>>(
        () => new Map(defaultValue ? [[defaultValue, true]] : undefined)
    );
    const [isSearchUser, setSearchUser] = useState(false);

    const [filteredSuggestions, setFilteredSuggestions] =
        useState<T[]>(suggestions);

    const isFirstRender = useIsFirstRender();

    const suggestComponents = {
        SuggestItem,
        SuggestEmpty,
        SuggestWrapper,
        SuggestList,
        ...components,
    };

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!isSearchUser) {
            setFilteredSuggestions(suggestions);
            return;
        }
        const newFilteredSuggestions =
            onSuggestionsFetchRequested?.(inputValue) ||
            (inputValue === ''
                ? suggestions
                : suggestions.filter((suggestion) =>
                      getSuggestionValue(suggestion)
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                  ));
        setFilteredSuggestions(newFilteredSuggestions);
    }, [inputValue, isSearchUser]);

    useEffect(() => {
        if (!showSuggestions) {
            setSearchUser(false);
        }
        if (isFirstRender && activeValue.size > 0) {
            const [suggestion] = [...activeValue][0];
            inputProps.onChange?.(getSuggestionValue(suggestion));
            return;
        }
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
        inputRef.current?.focus();
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

    const handleKeyDown = (e: any) => {
        if (e.keyCode === KEY_CODE.ESC) {
            setShowSuggestions(false);
        }
    };

    const handleClearValue = (e: SyntheticEvent) => {
        e.stopPropagation();
        inputProps.onChange?.('');
        setActiveValue(new Map());
        onChange?.(null);
        inputRef.current?.focus();
    };

    return (
        <div className={'unique-suggestion-wrapper'}>
            <div
                className={'unique-suggestion'}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onKeyDown={handleKeyDown}
            >
                <div
                    className={'suggest-input'}
                    onClick={handleToggleOpenSuggest}
                >
                    <InputText
                        iconRight={renderIcon}
                        className={classNames({
                            dropped: showSuggestions,
                        })}
                        data-testid={showSuggestions ? 'dropped' : undefined}
                        {...inputProps}
                        onChange={(value) => {
                            !showSuggestions && setShowSuggestions(true);
                            inputProps.onChange?.(value);
                            setSearchUser(true);
                        }}
                        value={inputValue}
                        ref={inputRef}
                    />
                    {activeValue.size > 0 && !inputProps.disabled && (
                        <div
                            className={'icon-clear'}
                            onClick={handleClearValue}
                        >
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
                    >
                        <suggestComponents.SuggestWrapper
                            suggestions={filteredSuggestions}
                        >
                            {(_suggestions) => (
                                <suggestComponents.SuggestList
                                    suggestions={_suggestions}
                                >
                                    {(_suggestion) => (
                                        <div
                                            onClick={() =>
                                                handleSelectedSuggestion(
                                                    _suggestion
                                                )
                                            }
                                        >
                                            <suggestComponents.SuggestItem
                                                suggestion={_suggestion}
                                                suggestionValue={getSuggestionValue(
                                                    _suggestion
                                                )}
                                                isActive={activeValue.get(
                                                    _suggestion
                                                )}
                                            />
                                        </div>
                                    )}
                                </suggestComponents.SuggestList>
                            )}
                        </suggestComponents.SuggestWrapper>
                        {filteredSuggestions.length === 0 && (
                            <suggestComponents.SuggestEmpty
                                message={noSuggestMessage}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Suggest;
