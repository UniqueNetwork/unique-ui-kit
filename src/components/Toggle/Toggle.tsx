/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Toggle.scss';

interface ToggleProps {
    label: string;
    on?: boolean;
    size?: 's' | 'm';
    disabled?: boolean;
    onChange: (value: boolean) => void;
}

const Toggle: FC<ToggleProps> = ({
    on = false,
    label,
    size = 's',
    disabled,
    onChange
}: ToggleProps) => (
    <div
        className={classNames('unique-toggle-wrapper', `toggle-size-${size}`, {
            disabled
        })}
        {...(!disabled && {
            onClick: () => onChange(!on)
        })}
    >
        <span className={classNames('inner', { on })} />
        <label>{label}</label>
    </div>
);

export default Toggle;
