import React, {
    ButtonHTMLAttributes,
    FC
} from 'react';
import cn from 'classnames';
import './Button.scss';
import { Icon } from '../Sgv/Svg';
import arrowLeft from '../../assets/svg/arrow_left.svg';

type TButtonProps = ComponentProps & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick'>;

type TView = 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'danger';

interface ComponentProps {
    children?: React.ReactNode;
    className?: string;
    heightSize?: 's' | 'm';
    widthSize?: 's' | 'm' | 'full';
    view?: TView;
    leftIcon?: string;
    rightIcon?: string;
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
            className,
        ),
        onClick,
    };

    console.log(arrowLeft);

    return (
        <button {...componentProps}>
            {/* {leftIcon && <img className={cn('icon', 'icon-left')} src={leftIcon} />} */}
            {leftIcon && <Icon className={cn('icon', 'icon-left')}  path={arrowLeft}/>}
            {children}
            {rightIcon && <img className={cn('icon', 'icon-right')} src={rightIcon} />}
        </button>
    )
};

// еще нужен кэш: если в кэше нет иконки - делает запрос за ней, записывает в кэш