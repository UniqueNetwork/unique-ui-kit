/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import './Button.scss';

type TButtonProps = ComponentProps &
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick'>;

type TView = 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'danger';

interface ComponentProps {
    children?: React.ReactNode;
    className?: string;
    heightSize?: 's' | 'm';
    widthSize?: 's' | 'm';
    view?: TView;
    leftIcon?: string;
    rightIcon?: string;
    wide?: boolean;
}

export const Button: FC<TButtonProps> = ({
    children,
    widthSize = 's',
    leftIcon,
    rightIcon,
    heightSize = 's',
    view = 'primary',
    className,
    disabled = false,
    wide = false,
    onClick
}: TButtonProps) => {
    const componentProps = {
        disabled,
        className: cn(
            'button',
            `${view}`,
            { disabled },
            `height-size-${heightSize}`,
            `width-size-${widthSize}`,
            { wide },
            className
        ),
        onClick
    };

    return (
        <button {...componentProps}>
            {leftIcon && <img className={'icon icon-left'} src={leftIcon} />}
            {children}
            {rightIcon && <img className={'icon icon-right'} src={rightIcon} />}
        </button>
    );
};
