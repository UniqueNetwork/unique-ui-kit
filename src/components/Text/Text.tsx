/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ReactNode, FC } from 'react';
import { TColor, TSaturation } from './colors';
import './Text.scss';

export interface ITextProps {
    children: ReactNode;
    size: 'xs' | 's' | 'm' | 'l';
    weight: 'regular' | 'medium';
    color?: TColor;
    saturation?: TSaturation;
}

export const Text: FC<ITextProps> = ({
    children,
    color='primary',
    saturation = '500',
    size,
    weight = 'regular'
}: ITextProps) => {
    console.log('weight', weight);
    const fontWeight = weight === 'medium' ? '-medium' : '';
    return <span className={`unique-font-body-${size}${fontWeight} unique-color-${color}-${saturation}`}>{children}</span>;
};
