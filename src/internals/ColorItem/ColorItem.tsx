/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import './ColorItem.scss';

export interface ColorItemProps {
    color: string;
}

export const ColorItem: FC<ColorItemProps> = ({ color }: ColorItemProps) => (
    <div className={`unique-color-item ${color}`}>
        <div className="sass-variable">{`--${color}`}</div>
        <div className="hex-value"></div>
        <div className="color-sample"></div>
    </div>
);
