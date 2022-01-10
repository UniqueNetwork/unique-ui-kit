/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC } from 'react';
import './Avatar.scss';
import classNames from 'classnames';

export interface IAvatarProps {
    src: string;
    size: number;
    type?: 'circle' | 'square';
    className?: string;
}

const Avatar: FC<IAvatarProps> = ({
    src,
    className,
    size,
    type = 'square'
}: IAvatarProps) => {
    return (
        <img
            className={classNames(
                'unique-avatar',
                {
                    circle: type === 'circle',
                    square: type === 'square'
                },
                className
            )}
            alt="avatar"
            src={src}
            width={size}
        />
    );
};

export default Avatar;
