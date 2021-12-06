/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import React, {
    ButtonHTMLAttributes,
    FC
} from 'react';
import cn from 'classnames';
import './Button.scss';
import { Icon } from '../Icon/Icon';
import arrowLeft from '../../assets/svg/arrow_left.svg';
import arrowRight from '../../assets/svg/arrow_right.svg';

type TButtonProps = ComponentProps & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick'>;

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
            className,
        ),
        onClick,
    };

    return (
        <button {...componentProps}>
            {leftIcon && <Icon className={cn('icon', 'icon-left')}  path={arrowLeft}/>}
            {children}
            {rightIcon && <Icon className={cn('icon', 'icon-right')} path={arrowRight} />}
        </button>
    )
};