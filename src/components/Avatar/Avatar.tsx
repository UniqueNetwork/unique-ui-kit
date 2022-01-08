/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC } from 'react';
import './Avatar.scss';
import classNames from 'classnames';

interface IComponentProps {
    src: string;
    className: string;
    size: number;
    type: 'circle' | 'square';
}

const Avatar: FC<IComponentProps> = ({
    src,
    className,
    size,
    type = 'square'
}: IComponentProps) => {
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
