/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Radio.scss';

interface RadioProps {
    checked: boolean;
    label: string;
    size: 's' | 'm' | 'l';
    disabled?: boolean;
    onChange: (value: boolean) => void;
}

export const Radio: FC<RadioProps> = ({
    checked,
    label,
    size = 'm',
    disabled,
    onChange
}: RadioProps) => (
    <div
        className={classNames('unique-radio-wrapper', `radio-size-${size}`, {
            disabled
        })}
        {...(!disabled && {
            onClick: () => onChange(!checked)
        })}
    >
        <input
            type="radio"
            name={label}
            id={label}
            className="radio"
            checked={checked}
            onChange={(e) => e.preventDefault()}
        />
        <span className={classNames('inner', { checked })} />
        <label>{label}</label>
    </div>
);
