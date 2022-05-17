/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import { Heading } from '../../components';
import { ColorItem } from '..';

import './ColorPalette.scss';

export interface ColorPaletteProps {
    palette: string;
    colors: string[];
    title?: string;
}

export const ColorPalette: FC<ColorPaletteProps> = ({
    palette,
    colors,
    title,
}: ColorPaletteProps) => (
    <div className={`unique-color-palette ${palette}`}>
        {title && <Heading size="2">{title}</Heading>}
        {colors.map((color) => (
            <ColorItem color={color} key={color} />
        ))}
    </div>
);
