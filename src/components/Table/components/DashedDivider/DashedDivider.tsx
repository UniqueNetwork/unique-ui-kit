import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './DashedDivider.scss';

interface IDashedDividerProps {
    children: ReactNode;
    className?: string;
}

export const DashedDivider: FC<IDashedDividerProps> = ({
    children='hello',
    className
}: IDashedDividerProps) => {
    return (
        <td colSpan={5}><div className='border'/></td>
    );
};