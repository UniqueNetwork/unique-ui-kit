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
    src = Empty,
    size = 38,
    type = 'square',
}: IAvatarProps) => (
    <img
        width={size}
        height={size}
        className={`unique-avatar ${type}`}
        src={src}
    />
);
