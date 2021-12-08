/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC } from 'react';
import classNames from 'classnames';
import './Pagination.scss';
import { render } from 'react-dom';

interface IPaginationProps {
    pageCount: number;
    currentPage?: number;
    pageSize?: number;
    pageSizeOptions?: Array<number>;
    onPageChange: (currentPage: number) => {};
    onPageSizeChange: (pageSize: number) => {};
    className?: string;
}

export const InputText: FC<IPaginationProps> = ({
    pageCount,
    currentPage = 0,
    pageSize = 10,
    pageSizeOptions = [10, 20, 50, 100],
    onPageChange,
    onPageSizeChange,
    className
}: IPaginationProps) => {
    return(
        <div >
            Pagination
        </div>
    );
};
