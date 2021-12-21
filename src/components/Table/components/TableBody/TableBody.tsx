import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './TableBody.scss';

interface ITableBodyProps {
    children: ReactNode;
    className?: string;
}

export const TableBody: FC<ITableBodyProps> = ({
    children='hello',
    className
}: ITableBodyProps) => {
    return (
        <tbody className='table-body'>{children}</tbody>
    );
};
