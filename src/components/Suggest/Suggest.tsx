/**
 * @author Sergey Kozlov <skozlov@usetech.com>
 */

import {
    ComponentType,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from 'react';

import { Icon, InputText, Scrollbar } from '..';
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
    SuggestSpinner,
} from './components';
import classNames from 'classnames';
import { useIsFirstRender, useIntersectionObserver } from '../../utils/hooks';

export interface SuggestProps<SuggestOption> {
    // function will call every time need to update suggestions
    onSuggestionsFetchRequested?(
        inputValue: string,
        currentSuggests: SuggestOption[]
    ): SuggestOption[];
    // suggestion values
    suggestions: SuggestOption[];
    // props for InputText component
    inputProps?: Omit<InputTextProps, 'onChange' | 'value'>;
    // get value for suggestion
    getSuggestionValue(suggestion: SuggestOption): string;
    // callback for selected value
    onChange?(suggestion: SuggestOption | null): void;
    // set your own components
    components?: SuggestComponents<SuggestOption>;
    // message when result empty
    noSuggestMessage?: string;
    // value suggest component
    value?: SuggestOption;
    // download status suggest option
    isLoading?: boolean;
    // function will call each time to change the input value
    onInputChange?(value: string): void;
    // text to display when in a loading state.
    loadingText?: string | ReactNode;
    // used to determine if the option represents the given value.
    getActiveSuggestOption(
        suggest: SuggestOption,
        activeValue: SuggestOption
    ): boolean;
    // load more suggestion option
    onLoadMore?: () => void;
}

export type SuggestComponents<SuggestOption> = {
    SuggestItem?: ComponentType<SuggestItemProps<SuggestOption>>;
    SuggestEmpty?: ComponentType<SuggestEmptyProps>;
    SuggestWrapper?: ComponentType<SuggestWrapperProps<SuggestOption>>;
    SuggestList?: ComponentType<SuggestListProps<SuggestOption>>;
};

const KEY_CODE = {
    ESC: 27,
};

const Suggest = <T,>({
    inputProps: _inputProps,
    suggestions,
    getSuggestionValue,
    components,
    onChange,
    onSuggestionsFetchRequested,
    noSuggestMessage = 'No results',
    value,
    isLoading = false,
    onInputChange,
    loadingText = 'Please wait',
    getActiveSuggestOption,
    onLoadMore,
}: SuggestProps<T>) => {
    const { statusText, ...inputProps } = _inputProps || {};
    const { intersectionObserverRef, isVisibleIntersectionObserver } =
        useIntersectionObserver({
            callback: onLoadMore,
            isActive: !isLoading,
        });

    const [showSuggestions, setShowSuggestions] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [activeValue, setActiveValue] = useState<T | null>(value || null);
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
        if (!value) {
            return;
        }
        setActiveValue(value);
        setInputValue(getSuggestionValue(value));
    }, [value]);

    useEffect(() => {
        if (!isSearchUser) {
            setFilteredSuggestions(suggestions);
            return;
        }
        const newFilteredSuggestions =
            onSuggestionsFetchRequested?.(inputValue, filteredSuggestions) ||
            (inputValue === ''
                ? suggestions
                : suggestions.filter((suggestion) =>
                      getSuggestionValue(suggestion)
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                  ));
        setFilteredSuggestions(newFilteredSuggestions);
    }, [inputValue, isSearchUser, suggestions]);

    useEffect(() => {
        !isFirstRender && onInputChange?.(inputValue);
    }, [inputValue]);

    useEffect(() => {
        if (!showSuggestions) {
            setSearchUser(false);
        }
        if (isFirstRender && activeValue) {
            setInputValue(getSuggestionValue(activeValue));
            return;
        }
        if (!showSuggestions && activeValue) {
            setInputValue(getSuggestionValue(activeValue));
        }
        if (
            (!showSuggestions && !activeValue && inputValue.length > 0) ||
            (!showSuggestions && activeValue && inputValue.length === 0)
        ) {
            setInputValue('');
            setActiveValue(null);
        }
    }, [showSuggestions]);

    const handleSelectedSuggestion = (suggestion: T) => {
        setFilteredSuggestions(suggestions);
        setShowSuggestions(false);
        onChange?.(suggestion);
        setInputValue(getSuggestionValue(suggestion));
        setActiveValue(suggestion);
    };

    const handleToggleOpenSuggest = () => {
        if (inputProps?.disabled) {
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
        setInputValue('');
        setActiveValue(null);
        onChange?.(null);
        inputRef.current?.focus();
    };

    return (
        <div
            className={classNames('unique-suggestion-wrapper', {
                error: inputProps.error,
            })}
        >
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
                        iconRight={
                            <div className={'icon-right-wrapper'}>
                                {activeValue && !inputProps?.disabled && (
                                    <div
                                        className={'icon-clear'}
                                        onClick={handleClearValue}
                                    >
                                        <Icon
                                            size={19}
                                            color="var(--color-blue-grey-400)"
                                            name="circle-close"
                                        />
                                    </div>
                                )}
                                <Icon
                                    name="triangle"
                                    size={8}
                                    color="var(--color-blue-grey-500)"
                                />
                            </div>
                        }
                        className={classNames({
                            dropped: showSuggestions,
                        })}
                        data-testid={showSuggestions ? 'dropped' : undefined}
                        {...inputProps}
                        onChange={(value) => {
                            !showSuggestions && setShowSuggestions(true);
                            setInputValue(value);
                            setSearchUser(true);
                        }}
                        value={inputValue}
                        ref={inputRef}
                    />
                </div>

                {showSuggestions && (
                    <div
                        className={classNames('suggestion-values', {
                            empty: filteredSuggestions.length === 0,
                        })}
                    >
                        {isLoading && !isVisibleIntersectionObserver ? (
                            <SuggestSpinner loadingText={loadingText} />
                        ) : (
                            <Scrollbar autoHeightMax={250}>
                                <suggestComponents.SuggestWrapper
                                    suggestions={filteredSuggestions}
                                >
                                    {(_suggestions) => (
                                        <>
                                            <suggestComponents.SuggestList
                                                suggestions={_suggestions}
                                            >
                                                {(_suggestion, isLast) => (
                                                    <div
                                                        onClick={() =>
                                                            handleSelectedSuggestion(
                                                                _suggestion
                                                            )
                                                        }
                                                        ref={
                                                            isLast
                                                                ? intersectionObserverRef
                                                                : undefined
                                                        }
                                                    >
                                                        <suggestComponents.SuggestItem
                                                            suggestion={
                                                                _suggestion
                                                            }
                                                            suggestionValue={getSuggestionValue(
                                                                _suggestion
                                                            )}
                                                            isActive={
                                                                activeValue
                                                                    ? getActiveSuggestOption(
                                                                          _suggestion,
                                                                          activeValue
                                                                      )
                                                                    : false
                                                            }
                                                        />
                                                    </div>
                                                )}
                                            </suggestComponents.SuggestList>

                                            {isVisibleIntersectionObserver &&
                                                isLoading && (
                                                    <SuggestSpinner
                                                        loadingText={
                                                            loadingText
                                                        }
                                                    />
                                                )}
                                        </>
                                    )}
                                </suggestComponents.SuggestWrapper>
                                {filteredSuggestions.length === 0 && (
                                    <suggestComponents.SuggestEmpty
                                        message={noSuggestMessage}
                                    />
                                )}
                            </Scrollbar>
                        )}
                    </div>
                )}
            </div>
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};

export default Suggest;
