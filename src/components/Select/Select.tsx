/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC, Key, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '..';
import { ComponentProps, DimentionType, SelectOptionProps } from '../../types';
import './Select.scss';

interface SelectProps extends ComponentProps {
    options: SelectOptionProps[];
    optionKey?: string;
    optionValue?: string;
    additionalText?: string | number;
    error?: boolean;
    label?: string;
    statusText?: string;
    size?: DimentionType;
    onChange(option: SelectOptionProps): void;
}

const Select: FC<SelectProps> = ({
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
    onBlur
}) => {
    useEffect(() => {
        const defaultOption =
            defaultValue &&
            options.find(
                (option) =>
                    option[optionValue as keyof SelectOptionProps] ===
                    defaultValue
            );
        defaultOption && onChange(defaultOption);
    }, []);

    const selected = options.find(
        (option) => option[optionKey as keyof SelectOptionProps] === value
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
        onChange?.(option);
    };

    return (
        <div
            className={classNames('unique-select', `size-${size}`, className, {
                error
            })}
        >
            {label && <label htmlFor={id}>{label}</label>}
            {additionalText && (
                <div className="additional-text">{additionalText}</div>
            )}
            <div
                className={classNames('select-wrapper', {
                    dropped,
                    disabled
                })}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onFocus={onFocus}
                onBlur={onBlur}
                tabIndex={tabIndex}
                id={id}
            >
                <div
                    className={classNames('select-value', {
                        'with-icon': icon,
                        'to-left': selected?.iconLeft,
                        'to-right': selected?.iconRight
                    })}
                    onMouseDown={handleMouseDown}
                >
                    {selected?.[optionKey as keyof SelectOptionProps] ? (
                        <>
                            {selected?.[optionValue as keyof SelectOptionProps]}
                            {icon && <Icon {...icon} />}
                        </>
                    ) : (
                        placeholder && (
                            <span className="select-placeholder">
                                {placeholder}
                            </span>
                        )
                    )}
                </div>
                {dropped && options && (
                    <div className="select-dropdown">
                        {options.map((option) => {
                            const icon = option.iconLeft || option.iconRight;
                            return (
                                <div
                                    className={classNames('dropdown-option', {
                                        selected:
                                            option[
                                                optionKey as keyof SelectOptionProps
                                            ] ===
                                            selected?.[
                                                optionKey as keyof SelectOptionProps
                                            ],
                                        'with-icon': icon,
                                        'to-left': option.iconLeft,
                                        'to-right': option.iconRight,
                                        disabled
                                    })}
                                    key={
                                        option[
                                            optionKey as keyof SelectOptionProps
                                        ] as Key
                                    }
                                    onClick={() => handleOptionSelect(option)}
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
                <Icon name="triangle" size={8} />
            </div>
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};

export default Select;
