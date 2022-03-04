/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import { IconProps } from '../../types';
import Icons from '../../assets/svg/icons.svg';

const Icon: FC<IconProps> = ({
    name,
    file,
    size,
    color = 'var(--color-blue-grey-300)'
}: IconProps) =>
    file ? (
        <img width={size} height={size} src={file} />
    ) : (
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
