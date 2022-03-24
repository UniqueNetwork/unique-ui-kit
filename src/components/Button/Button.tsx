/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import { ButtonProps } from '../../types';
import { Icon } from '..';
import './Button.scss';

const Button: FC<ButtonProps> = ({
    title,
    disabled,
    wide,
    size = 'm',
    role = 'outlined',
    className,
    iconLeft,
    iconRight,
    onClick
}: ButtonProps) => {
    const icon = iconLeft || iconRight;
    return (
        <button
            className={classNames(
                'unique-button',
                role,
                `size-${size}`,
                className,
                {
                    disabled,
                    wide,
                    'with-icon': icon,
                    'to-left': iconLeft,
                    'to-right': iconRight
                }
            )}
            onClick={onClick}
        >
            {title}
            {icon && <Icon {...icon} />}
        </button>
    );
};

export default Button;
