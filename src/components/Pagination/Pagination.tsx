/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC, useState } from 'react';
import cn from 'classnames';
import './Pagination.scss';
import { Icon } from '../../components';
import caretRight from '../../assets/svg/caret_right.svg';

interface IPaginationProps {
    pageCount: number;
    currentPage?: number;
    onPageChange?: (currentPage: number) => {};
    className?: string;
}

export const Pagination: FC<IPaginationProps> = ({
    pageCount,
    currentPage = 0,
    onPageChange,
    className
}: IPaginationProps) => {
    const [activePage, setCurrentPage] = useState(currentPage);

    const onClick = (page: number) => {
        setCurrentPage(page);
        onPageChange!(page);
    };

    const nextPage = () => {
        if (!disabledNext) {
            setCurrentPage(activePage + 1);
        }
    };

    const firstPages = [1, 2, 3, 4, 5, 6, 7];
    const lastPages = [];
    for (let i = pageCount; i > pageCount - 7; i--) {
        lastPages.unshift(i);
    }
    if (pageCount <= 7) {
        firstPages.length = pageCount;
    }

    const disabledNext = pageCount === activePage;
    const showFirstThreeDots = activePage - 2 > 1;
    const showLastThreeDots = pageCount - 2 > activePage;
    const threeDots = <span className="three-dots cell">...</span>;
    const elem = (page: number) => {
        return (
            <div
                key={page}
                className={cn('element cell', { active: page === activePage })}
                onClick={() => onClick(page)}
            >
                {page}
            </div>
        );
    };
    const fivePagesView = <>{firstPages.map((page) => elem(page))}</>;

    const firstSevenPagesView = (
        <>
            {firstPages.map((page) => elem(page))}
            {showLastThreeDots && threeDots}
            {pageCount > activePage && elem(pageCount)}
        </>
    );

    const lastSevenPagesView = (
        <>
            {elem(1)}
            {showFirstThreeDots && threeDots}
            {lastPages.map((page) => elem(page))}
        </>
    );

    const allPagesView = (
        <>
            {activePage > 2 && elem(1)}
            {showFirstThreeDots && threeDots}
            {activePage > 1 && elem(activePage - 1)}
            {elem(activePage)}
            {pageCount > activePage + 1 && elem(activePage + 1)}
            {showLastThreeDots && threeDots}
            {pageCount > activePage && elem(pageCount)}
        </>
    );

    const paginationContent = () => {
        switch (true) {
            case pageCount <= 5:
                return fivePagesView;

            case activePage <= 4:
                return firstSevenPagesView;

            case activePage > pageCount -6:
                return lastSevenPagesView;

            default:
                return allPagesView;
        }
    };

    return (
        <div className={`${className} unique-pagination-wrapper`}>
            {paginationContent()}
            <Icon
                className={cn('icon', { disabled: disabledNext })}
                path={caretRight}
                onClick={nextPage}
            />
        </div>
    );
};
