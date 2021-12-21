import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './TableHead.scss';

interface ITableHeadProps {
    children: ReactNode;
    className?: string;
}

export const TableHead: FC<ITableHeadProps> = ({
    children='hello',
    className
}: ITableHeadProps) => {
    return (
        <thead>{children}</thead>
    );
};