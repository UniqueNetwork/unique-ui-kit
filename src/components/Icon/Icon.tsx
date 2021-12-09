/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import Icons from '../../assets/svg/icons.svg';

export interface IconProps {
    name: string;
    color: string;
    size: number;
}

export const Icon: FC<IconProps> = ({ name, color, size }: IconProps) => (
    <svg
        className={`icon icon-${name}`}
        fill={color}
        width={size}
        height={size}
    >
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
);
