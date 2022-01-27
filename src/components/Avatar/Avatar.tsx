/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import React, { FC } from 'react';
import './Avatar.scss';

export interface IAvatarProps {
    src: string;
    size: number;
    type?: 'circle' | 'square';
}

const Avatar: FC<IAvatarProps> = ({
    src,
    size = 38,
    type = 'square'
}: IAvatarProps) => (
    <img className={`unique-avatar ${type}`} src={src} width={size} />
);

export default Avatar;
