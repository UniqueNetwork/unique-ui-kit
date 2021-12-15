/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import { ColorItem } from '..';
import './ColorPalette.scss';

interface ColorPaletteProps {
    palette: string;
    colors: string[];
    title?: string;
}

const ColorPalette: FC<ColorPaletteProps> = ({
    palette,
    colors,
    title
}: ColorPaletteProps) => (
    <div className={`unique-color-palette ${palette}`}>
        {title && <h2>{title}</h2>}
        {colors.map((color) => (
            <ColorItem color={color} key={color} />
        ))}
    </div>
);

export default ColorPalette;
