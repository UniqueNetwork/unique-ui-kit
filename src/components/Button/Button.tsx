/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import { IconProps } from '../../types';
import { Icon } from '..';
import './Button.scss';

interface ButtonProps {
    title: string;
    disabled?: boolean;
    size?: 's' | 'm' | 'l';
    role?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'danger';
    wide?: boolean;
    className?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({
    title,
    disabled,
    wide,
    size = 'l',
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
