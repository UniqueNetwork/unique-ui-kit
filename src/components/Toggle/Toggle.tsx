/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Toggle.scss';

interface ToggleProps {
    on: boolean;
    label: string;
    size: 's' | 'm';
    disabled?: boolean;
    onChange: (value: boolean) => void;
}

const Toggle: FC<ToggleProps> = ({
    on,
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
