/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import classNames from 'classnames';
import { DimentionType } from '../../types';
import { Icon, IconProps } from '..';

import './Button.scss';

export interface ButtonProps {
    title: string;
    disabled?: boolean;
    size?: DimentionType;
    role?:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'outlined'
        | 'danger'
        | 'ghost';
    type?: 'submit' | 'button';
    wide?: boolean;
    className?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    link?: string;
    onClick?: () => void;
}

export const Button = ({
    title,
    disabled,
    wide,
    size = 'middle',
    role = 'outlined',
    className,
    iconLeft,
    iconRight,
    type = 'button',
    link,
    onClick,
}: ButtonProps) => {
    const icon = iconLeft || iconRight;
    const Button = link ? 'a' : 'button';
    return (
        <Button
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
                    'to-right': iconRight,
                }
            )}
            onClick={onClick}
            type={type}
            href={link}
        >
            {title}
            {icon && <Icon {...icon} />}
        </Button>
    );
};
