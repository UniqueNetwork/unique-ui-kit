/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Radio.scss';

interface RadioProps {
    value?: boolean;
    label?: string;
    disabled?: boolean;
    size?: 's';
    onChange?: (value: boolean) => void;
}

export const Radio: FC<RadioProps> = ({
    value = false,
    label,
    disabled = false,
    size,
    onChange,
    ...props
}: RadioProps) => (
    <div
        className={classNames(
            'unique-radio-wrapper',
            size && `radio-size-${size}`,
            { disabled }
        )}
        {...(!disabled && {
            onClick: () => onChange?.(!value)
        })}
    >
        <input
            type="radio"
            name={label}
            className="radio"
            checked={value}
            onChange={(e) => e.preventDefault()}
        />
        <span className={classNames('inner', { checked: value })}></span>
        <label>{label}</label>
    </div>
);
