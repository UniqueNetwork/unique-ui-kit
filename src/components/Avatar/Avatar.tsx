/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC } from 'react';
import { useGetAvatar } from './useGetAvatar';
import './Avatar.scss';

interface IComponentProps {
    path: string;
    className: string;
}

const Avatar: FC<IComponentProps> = ({
    path,
    className
}: IComponentProps) => {
    const avatar = useGetAvatar(path);

    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: avatar }}
        />
    );
};

export default Avatar;
