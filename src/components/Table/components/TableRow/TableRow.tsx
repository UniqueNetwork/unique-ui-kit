import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './TableRow.scss';

interface ITableRowProps {
    children: ReactNode;
    className?: string;
}

export const TableRow: FC<ITableRowProps> = ({
    children='hello',
    className
}: ITableRowProps) => {
    return (
        <tr className='table-row'>{children}</tr>
    );
};