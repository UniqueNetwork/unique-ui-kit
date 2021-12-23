import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './DashedDivider.scss';

interface IDashedDividerProps {
    className?: string;
}

export const DashedDivider: FC<IDashedDividerProps> = ({
    className
}: IDashedDividerProps) => {
    return (
        <tr>
        <td colSpan={5}><div className='border'/></td>
        </tr>
    );
};