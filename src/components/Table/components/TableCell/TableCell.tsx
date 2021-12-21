import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './TableCell.scss';

interface ITableCellProps {
    children: ReactNode;
    className?: string;
}

export const TableCell: FC<ITableCellProps> = ({
    children='hello',
    className
}: ITableCellProps) => {
    return (
        <td className='table-cell'>{children}</td>
    );
};