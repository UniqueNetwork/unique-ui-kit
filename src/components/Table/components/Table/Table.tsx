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

export const Table: FC<ITableProps> = ({
    children = 'hello',
    className
}: ITableProps) => {
    return <table className={classNames(`table`, className)}>{children}</table>;
};
