/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import './Avatar.scss';
import Empty from '../../assets/static/empty.svg';

export interface IAvatarProps {
    src?: string;
    size?: number | string;
    defaultSrc?: string;
    type?: 'circle' | 'square';
}

export const Avatar = ({ src, size = 38, type = 'square' }: IAvatarProps) => (
    <img
        width={size}
        height={size}
        className={`unique-avatar ${type}`}
        src={src?.length ? src : Empty}
    />
);
