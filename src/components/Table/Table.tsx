/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './Table.scss';

interface ITableProps {
    children: ReactNode;
    className?: string;
}

const Table: FC<ITableProps> = ({
    children='hello',
    className
}: ITableProps) => {
    return (
        //cellPadding="0" пока ничего не делает
        //cellSpacing="0" сдвигает 2 черточки в бордере
        <table className='table'>
            
            {children}</table>
    );
};

export default Table;
