/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import Icons from '../../assets/svg/icons.svg';

interface IIconProps {
    name: string;
    color: string;
    size: number;
}

export const Icon: FC<IIconProps> = ({ name, color, size }: IIconProps) => (
    <svg
        className={`icon icon-${name}`}
        fill={color}
        width={size}
        height={size}
    >
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
);
