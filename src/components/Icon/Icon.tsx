/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import Icons from '../../assets/svg/icons.svg';
import { ForwardedRef, forwardRef } from 'react';

export interface IconProps {
    size: number;
    name?: string;
    file?: string;
    color?: string;
}

export const Icon = forwardRef(
    (
        {
            name,
            file,
            size,
            color = 'var(--color-blue-grey-300)',
            ...props
        }: IconProps,
        ref: ForwardedRef<any>
    ) => {
        return file ? (
            <img width={size} height={size} src={file} ref={ref} {...props} />
        ) : (
            <span ref={ref}>
                <svg
                    className={`icon icon-${name}`}
                    fill={color}
                    width={size}
                    height={size}
                    data-testid={`icon-${name}`}
                    {...props}
                >
                    <use xlinkHref={`${Icons}#icon-${name}`} />
                </svg>
            </span>
        );
    }
);
