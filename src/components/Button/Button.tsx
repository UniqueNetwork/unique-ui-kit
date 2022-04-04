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
    size = 'middle',
    role = 'outlined',
    className,
    iconLeft,
    iconRight,
    onClick,
    type = 'button'
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
            type={type}
        >
            {title}
            {icon && <Icon {...icon} />}
        </button>
    );
};

export default Button;
