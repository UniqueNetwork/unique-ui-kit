/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import Icons from '../../assets/svg/icons.svg';

export interface IconProps {
    name: string;
    size: number;
    color?: string;
}

export const Icon: FC<IconProps> = ({
    name,
    size,
    color = '#7f90a1'
}: IconProps) => (
    <svg
        className={`icon icon-${name}`}
        fill={color}
        width={size}
        height={size}
    >
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
);
