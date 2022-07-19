/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import './Avatar.scss';
import Empty from '../../assets/static/empty.svg';

export interface IAvatarProps {
    src?: string;
    size?: number;
    defaultSrc?: string;
    type?: 'circle' | 'square';
}

export const Avatar = ({
    src,
    size = 38,
    type = 'square',
    defaultSrc = Empty,
}: IAvatarProps) => (
    <img
        width={size}
        height={size}
        className={
            src ? `unique-avatar ${type}` : `unique-avatar ${type} empty`
        }
        src={src || defaultSrc}
    />
);
