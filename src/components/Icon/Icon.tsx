/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC } from 'react';
import { useGetIcon } from './useGetIcon';
import './Icon.scss';

interface IComponentProps {
    path: string;
    className?: string;
    onClick?: () => void;
}

export const Icon: FC<IComponentProps> = ({
    path,
    className,
    onClick
}: IComponentProps) => {
    const icon = useGetIcon(path);

    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: icon }}
            onClick={onClick}
        />
    );
};
