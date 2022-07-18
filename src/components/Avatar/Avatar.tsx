/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import './Avatar.scss';
import EmptyCircle from '../../assets/static/empty-circle.svg';
import EmptySquare from '../../assets/static/empty-square.svg';

export interface IAvatarProps {
    src?: string;
    size?: number;
    type?: 'circle' | 'square';
}

export const Avatar = ({ src, size = 38, type = 'square' }: IAvatarProps) => (
    <img
        width={size}
        height={size}
        className={`unique-avatar ${type}`}
        src={src || (type === 'square' && EmptySquare) || EmptyCircle}
    />
);
