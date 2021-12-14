/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ReactNode, FC } from 'react';
import { TColor } from './colors';
import './Text.scss';

interface ITextProps {
    children: ReactNode;
    size?: 'xs' | 's' | 'm' | 'l';
    weight?: 'regular' | 'medium';
    color?: TColor;
    className?: string;
}

const Text: FC<ITextProps> = ({
    children,
    color = 'dark',
    size = 'm',
    className,
    weight = 'regular'
}: ITextProps) => {
    const fontWeight = weight === 'medium' ? '-medium' : '';
    return (
        <span
            className={`unique-font-body-${size}${fontWeight} unique-color-${color}-600 ${className}`}
        >
            {children}
        </span>
    );
};

export default Text;
