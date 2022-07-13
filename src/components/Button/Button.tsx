/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import classNames from 'classnames';
import { ComponentProps, DimentionType } from '../../types';
import { Icon, IconProps } from '..';

import './Button.scss';

export interface ButtonBaseProps {
    title: string;
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
    iconLeft?: IconProps;
    iconRight?: IconProps;
    link?: string;
    onClick?: () => void;
}

export type ButtonProps = ButtonBaseProps &
    Pick<
        ComponentProps,
        'className' | 'disabled' | 'id' | 'tabIndex' | 'testid'
    >;

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
    testid,
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
            disabled={disabled}
            data-testid={testid}
        >
            {title}
            {icon && <Icon {...icon} />}
        </Button>
    );
};
