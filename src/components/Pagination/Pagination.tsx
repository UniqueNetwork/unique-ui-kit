/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC } from 'react';
import cn from 'classnames';
import './Pagination.scss';
import { Icon } from '../../components';
import caretRight from '../../assets/svg/caret_right.svg';
import caretLeft from '../../assets/svg/caret_left.svg';

interface IPaginationProps {
    pageCount: number;
    currentPage: number;
    className?: string;
    disabled?: boolean;
    showPrevButton?: boolean;
    showNextButton?: boolean;
    onChange?: (currentPage: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
    pageCount,
    currentPage = 0,
    className,
    disabled = false,
    showPrevButton = true,
    showNextButton = true,
    onChange
}: IPaginationProps) => {
    //Todo: обернуть в useCallback
    const prevPage = () => {
        if (!disabledPrev) {
            onChange!(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (!disabledNext) {
            onChange!(currentPage + 1);
        }
    };

    const firstPages = new Array(pageCount <= 7 ? pageCount : 7).fill(0).map((_, i) => i + 1);
    const lastPages = [];
    for (let i = pageCount; i > pageCount - 7; i--) {
        lastPages.unshift(i);
    }

    const disabledNext = pageCount === currentPage || disabled;
    const disabledPrev = currentPage === 1 || disabled;
    const showThreeDots = pageCount > 8;

    // Todo:в компонент
    const threeDots = <span className="three-dots cell">...</span>;

    // Todo:в компонент
    const elem = (page: number) => {
        return (
            <li
                key={page}
                className={cn(
                    'element cell',
                    { active: page === currentPage && !disabled },
                    { disabled }
                )}
                onClick={() => onChange!(page)}
            >
                {page.toLocaleString()}
            </li>
        );
    };

    //  Todo:отдельные компоненты
    const lessEightPagesView = <>{firstPages.map((page) => elem(page))}</>;

    const pagesFromBeginView = (
        <>
            {firstPages.map((page) => elem(page))}
            {showThreeDots && threeDots}
            {pageCount > currentPage && elem(pageCount)}
        </>
    );

    const pagesBeforeEndView = (
        <>
            {elem(1)}
            {showThreeDots && threeDots}
            {lastPages.map((page) => elem(page))}
        </>
    );

    const allPagesView = (
        <>
            {elem(1)}
            {threeDots}
            {elem(currentPage - 1)}
            {elem(currentPage)}
            {elem(currentPage + 1)}
            {threeDots}
            {elem(pageCount)}
        </>
    );

    const paginationContent = () => {
        switch (true) {
            case pageCount < 8:
                return lessEightPagesView;

            case currentPage <= 4:
                return pagesFromBeginView;

            case currentPage > pageCount - 6:
                return pagesBeforeEndView;

            default:
                return allPagesView;
        }
    };

    return (
        <ul className={`${className} unique-pagination-wrapper`}>
            {showPrevButton && (
                <Icon
                    className={cn('button', { disabled: disabledPrev })}
                    path={caretLeft}
                    onClick={prevPage}
                />
            )}
            {paginationContent()}
            {showNextButton && (
                <Icon
                    className={cn('button', { disabled: disabledNext })}
                    path={caretRight}
                    onClick={nextPage}
                />
            )}
        </ul>
    );
};
