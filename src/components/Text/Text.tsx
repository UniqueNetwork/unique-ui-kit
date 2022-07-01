/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ReactNode } from 'react';
import classNames from 'classnames';
import './Text.scss';

export interface ITextProps {
    children: ReactNode;
    size?: 'xs' | 's' | 'm' | 'l';
    weight?: 'light' | 'regular' | 'bold';
    color?: string;
    className?: string;
    appearance?: 'inline' | 'block';
}

export const Text = ({
    children,
    size = 'm',
    weight = 'regular',
    color = 'secondary-500',
    className,
    appearance = 'inline',
}: ITextProps) => {
    return (
        <span
            className={classNames(
                'unique-text',
                `size-${size}`,
                `weight-${weight}`,
                `color-${color}`,
                `appearance-${appearance}`,
                className
            )}
        >
            {children}
        </span>
    );
};
