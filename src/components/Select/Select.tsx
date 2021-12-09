/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ComponentProps } from '../../types';
import { Icon } from '..';
import './Select.scss';

interface SelectProps extends ComponentProps {
    options: (string | number)[];
    additionalText?: string | number;
    error?: boolean;
    label?: string;
    statusText?: string;
}

export const Select: FC<SelectProps> = ({
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
    onChange,
    onFocus,
    onBlur
}) => {
    useEffect(() => {
        if (defaultValue && options.indexOf(defaultValue) !== -1) {
            onChange!(defaultValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    const handleOptionSelect = (value: string | number | undefined) => {
        setDropped(false);
        onChange!(value);
    };

    return (
        <div className={classNames('unique-select', className, { error })}>
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
                <div className="select-value" onMouseDown={handleMouseDown}>
                    {value ||
                        (placeholder && (
                            <span className="select-placeholder">
                                {placeholder}
                            </span>
                        ))}
                </div>
                {dropped && options && (
                    <div className="select-dropdown">
                        {options.map((option) => (
                            <div
                                className={classNames('dropdown-option', {
                                    selected: value === option,
                                    disabled
                                })}
                                key={option}
                                onClick={handleOptionSelect.bind(this, option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
                <Icon name="triangle" size={8} />
            </div>
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};
