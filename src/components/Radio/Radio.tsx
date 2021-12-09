/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Radio.scss';

export interface RadioProps {
    checked: boolean;
    value: string | number;
    size?: 's' | 'm';
    disabled?: boolean;
    onChange: (value: string | number) => void;
}

export const InternalRadio: FC<RadioProps> = ({
    checked,
    value,
    size = 'm',
    disabled,
    onChange
}: RadioProps) => (
    <div
        className={classNames('unique-radio-wrapper', `radio-size-${size}`, {
            disabled
        })}
        {...(!disabled && {
            onClick: () => onChange(value)
        })}
    >
        <input
            type="radio"
            name={value.toString()}
            id={value.toString()}
            className="radio"
            checked={checked}
            onChange={(e) => e.preventDefault()}
        />
        <span className={classNames('inner', { checked })} />
        <label>{value}</label>
    </div>
);
