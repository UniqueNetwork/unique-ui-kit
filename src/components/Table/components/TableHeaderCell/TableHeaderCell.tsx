import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './TableHeaderCell.scss';

interface ITableHeaderCellProps {
    children: ReactNode;
    className?: string;
}

export const TableHeaderCell: FC<ITableHeaderCellProps> = ({
    children='hello',
    className
}: ITableHeaderCellProps) => {
    return (
        <th className='table-header-cell'>{children}</th>
    );
};