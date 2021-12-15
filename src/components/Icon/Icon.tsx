/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import { IconProps } from '../../types';
import Icons from '../../assets/svg/icons.svg';
import cn from 'classnames';

const Icon: FC<IconProps> = ({ name, size, color = '#7f90a1', className, onClick }: IconProps) => (
    <svg
        className={cn(`icon`, `icon-${name}`, className)}
        fill={color}
        width={size}
        height={size}
        onClick={onClick}
    >
        <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
);

export default Icon;
