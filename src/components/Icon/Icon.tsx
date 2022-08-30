/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import Icons from '../../assets/svg/icons.svg';
import { ForwardedRef, forwardRef, isValidElement, ReactNode } from 'react';
import classNames from 'classnames';

export interface IconProps {
    size: number;
    name?: string;
    file?: string;
    color?: string;
    className?: string;
}

export type IconType = IconProps | ReactNode;

export const userIcon = (icon: IconType) =>
    icon && (isValidElement(icon) ? icon : <Icon {...(icon as IconProps)} />);

export const Icon = forwardRef(
    (
        {
            name,
            file,
            size,
            color = 'var(--color-blue-grey-300)',
            className,
            ...props
        }: IconProps,
        ref: ForwardedRef<any>
    ) =>
        file ? (
            <img
                width={size}
                height={size}
                src={file}
                className={className}
                {...props}
            />
        ) : (
            <svg
                className={classNames(`icon icon-${name}`, className)}
                fill={color}
                width={size}
                height={size}
                data-testid={`icon-${name}`}
                {...props}
            >
                <use xlinkHref={`${Icons}#icon-${name}`} />
            </svg>
        )
);
