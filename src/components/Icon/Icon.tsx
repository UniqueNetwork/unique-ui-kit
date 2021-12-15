/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import { IconProps } from '../../types';
import Icons from '../../assets/svg/icons.svg';

const Icon: FC<IconProps> = ({ name, size, color = '#7f90a1' }: IconProps) => (
    <svg
        className={`icon icon-${name}`}
        fill={color}
        width={size}
        height={size}
    >
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
);

export default Icon;
