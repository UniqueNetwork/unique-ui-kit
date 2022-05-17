/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import './Avatar.scss';

export interface IAvatarProps {
    src: string;
    size?: number;
    type?: 'circle' | 'square';
}

export const Avatar = ({ src, size = 38, type = 'square' }: IAvatarProps) => (
    <img
        className={`unique-avatar ${type}`}
        src={src}
        width={size}
        height={size}
    />
);
