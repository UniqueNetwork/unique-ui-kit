/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { Key, ReactNode, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '..';
import { ComponentProps, DimentionType, SelectOptionProps } from '../../types';
import './Select.scss';

export interface SelectProps extends ComponentProps {
    options: SelectOptionProps[];
    optionKey?: string;
    optionValue?: string;
    additionalText?: string | number;
    error?: boolean;
    label?: ReactNode;
    statusText?: string;
    size?: DimentionType;
    multi?: boolean;
    values?: string[] | undefined;
    onChange(option: SelectOptionProps | SelectOptionProps[]): void;
}

export const Select = ({
    id,
    value,
    autoFocus,
    label,
    additionalText,
    statusText,
    className,
    defaultValue,
    error,
    options,
    placeholder,
    disabled,
    tabIndex = -1,
    size = 'middle',
    optionKey = 'id',
    optionValue = 'title',
    onChange,
    onFocus,
    onBlur,
    multi = false,
    values,
    testid,
}: SelectProps) => {
    useEffect(() => {
        const defaultOption =
            defaultValue &&
            options.find(
                (option) =>
                    (option as SelectOptionProps)[optionKey] === defaultValue
            );
        defaultOption && onChange(defaultOption);
    }, []);

    const selected = options.find(
        (option) => option[optionKey as keyof SelectOptionProps] === value
    );

    const selectedMulti: SelectOptionProps[] = useMemo(
        () =>
            multi && values
                ? (values
                      .map((value) => {
                          return options.find(
                              (item) =>
                                  item[optionKey as keyof SelectOptionProps] ===
                                  value
                          );
                      })
                      .filter((item) => !!item) as SelectOptionProps[])
                : [],
        [multi, options, values]
    );

    const icon = selected?.iconLeft || selected?.iconRight;

    const [dropped, setDropped] = useState<boolean>(!!autoFocus);

    const handleMouseDown = () => {
        !disabled && setDropped(!dropped);
    };

    const handleClickOutside = () => {
        document.removeEventListener('mousedown', handleClickOutside);
        setDropped(false);
    };

    const handleMouseLeave = () => {
        document.addEventListener('mousedown', handleClickOutside);
    };

    const handleMouseEnter = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

    const handleOptionSelect = (option: SelectOptionProps) => {
        setDropped(false);
        if (multi) onChange?.([...selectedMulti, option]);
        else onChange?.(option);
    };

    const handleOptionUnselect = (option: SelectOptionProps) => {
        !disabled &&
            multi &&
            onChange?.(
                selectedMulti.filter(
                    (item) =>
                        option[optionKey as keyof SelectOptionProps] !==
                        item[optionKey as keyof SelectOptionProps]
                )
            );
    };

    const isSelected = (option: SelectOptionProps) => {
        if (multi)
            return selectedMulti.some(
                (item) =>
                    option[optionKey as keyof SelectOptionProps] ===
                    item[optionKey as keyof SelectOptionProps]
            );
        else
            return (
                option[optionKey as keyof SelectOptionProps] ===
                selected?.[optionKey as keyof SelectOptionProps]
            );
    };

    return (
        <div
            className={classNames('unique-select', `size-${size}`, className, {
                error,
            })}
        >
            {label && <label htmlFor={id}>{label}</label>}
            {additionalText && (
                <div className="additional-text">{additionalText}</div>
            )}
            <div
                className={classNames('select-wrapper', {
                    dropped,
                    disabled,
                })}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onFocus={onFocus}
                onBlur={onBlur}
                tabIndex={tabIndex}
                id={id}
                data-testid={testid}
            >
                <Icon name="triangle" size={8} />
                <div
                    className={classNames('select-value', {
                        'with-icon': icon,
                        'to-left': selected?.iconLeft,
                        'to-right': selected?.iconRight,
                        multi,
                    })}
                    onMouseDown={handleMouseDown}
                >
                    {multi &&
                        selectedMulti.length > 0 &&
                        selectedMulti.map((selectedOption, index) => (
                            <div className={'select-tag'} key={index}>
                                {
                                    selectedOption?.[
                                        optionValue as keyof SelectOptionProps
                                    ]
                                }
                                <div
                                    onClick={() =>
                                        handleOptionUnselect(selectedOption)
                                    }
                                >
                                    <Icon
                                        size={10}
                                        name={'close'}
                                        color={'white'}
                                    />
                                </div>
                            </div>
                        ))}
                    {!multi && (
                        <>
                            {selected?.[optionValue as keyof SelectOptionProps]}
                            {icon && <Icon {...icon} />}
                        </>
                    )}
                    {!(multi && selectedMulti.length) &&
                        !(!multi && selected) &&
                        placeholder && (
                            <span className="select-placeholder">
                                {placeholder}
                            </span>
                        )}
                </div>
                {dropped && options && (
                    <div className="select-dropdown">
                        {options.map((option) => {
                            const icon = option.iconLeft || option.iconRight;
                            const selected = isSelected(option);
                            return (
                                <div
                                    className={classNames('dropdown-option', {
                                        selected,
                                        'with-icon': icon,
                                        'to-left': option.iconLeft,
                                        'to-right': option.iconRight,
                                        disabled,
                                    })}
                                    key={
                                        (option as SelectOptionProps)[
                                            optionKey
                                        ] as Key
                                    }
                                    onClick={() =>
                                        selected && multi
                                            ? handleOptionUnselect(option)
                                            : handleOptionSelect(option)
                                    }
                                >
                                    {
                                        option[
                                            optionValue as keyof SelectOptionProps
                                        ]
                                    }
                                    {icon && <Icon {...icon} />}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};
