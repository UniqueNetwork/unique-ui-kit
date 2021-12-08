/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Toggle.scss';

interface ToggleProps {
    checked: boolean;
    label: string;
    size: 's' | 'm' | 'l';
    disabled?: boolean;
    onChange: (value: boolean) => void;
}

export const Toggle: FC<ToggleProps> = ({
    checked,
    label,
    size = 'm',
    disabled,
    onChange
}: ToggleProps) => (
    <div
        className={classNames('unique-toggle-wrapper', `toggle-size-${size}`, {
            disabled
        })}
        {...(!disabled && {
            onClick: () => onChange(!checked)
        })}
    >
        <span className={classNames('inner', { checked })} />
        <label>{label}</label>
    </div>
);
