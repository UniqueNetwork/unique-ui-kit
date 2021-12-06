/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import {
    FC
} from 'react';
import { useGetIcon } from './useGetIcon';
import './Icon.scss';

interface IComponentProps {
    path: string;
    className: string;
}

export const Icon: FC<IComponentProps> = ({
    path,
    className
}: IComponentProps) => {

    const icon = useGetIcon(path);

    return (
        <span className={className}
             dangerouslySetInnerHTML={{__html: icon}}/>
    )
};
