/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Checkbox.scss';

interface CheckboxProps {
    checked: boolean;
    label: string;
    size: 's' | 'm';
    disabled?: boolean;
    onChange: (value: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
    checked,
    label,
    disabled,
    size = 's',
    onChange
}: CheckboxProps) => (
    <div
        className={classNames(
            'unique-checkbox-wrapper',
            `checkbox-size-${size}`,
            { disabled }
        )}
        {...(!disabled && {
            onClick: () => onChange(!checked)
        })}
    >
        <input
            type="checkbox"
            name={label}
            id={label}
            className="checkbox"
            checked={checked}
            onChange={(e) => e.preventDefault()}
        />
        <span className={classNames('checkmark', { checked })}></span>
        <label>{label}</label>
    </div>
);
