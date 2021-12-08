/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { FC } from 'react';
import './Checkbox.scss';

interface CheckboxProps {
    value?: boolean;
    label?: string;
    disabled?: boolean;
    size?: 's';
    onChange?: (value: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
    value = false,
    label,
    disabled = false,
    size,
    onChange,
    ...props
}: CheckboxProps) => (
    <div
        className={classNames(
            'unique-checkbox-wrapper',
            size && `checkbox-size-${size}`,
            { disabled }
        )}
        {...(!disabled && {
            onClick: () => onChange?.(!value)
        })}
    >
        <input
            type="checkbox"
            name={label}
            className="checkbox"
            checked={value}
            onChange={(e) => e.preventDefault()}
        />
        <span className={classNames('checkmark', { checked: value })}></span>
        <label>{label}</label>
    </div>
);
