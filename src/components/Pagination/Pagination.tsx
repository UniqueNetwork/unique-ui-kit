/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC, useCallback } from 'react';
import cn from 'classnames';
import './Pagination.scss';
import { PageElement } from './components/PageElement';
import { ThreeDots } from './components/ThreeDots';
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
    isMobile?: boolean;
    onChange?: (currentPage: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
    pageCount,
    currentPage = 0,
    className,
    disabled = false,
    showPrevButton = true,
    showNextButton = true,
    isMobile = false,
    onChange
}: IPaginationProps) => {

    //сколько элементов отображается в десктопе от края
    const viewedElementDesktop = 7;
    //сколько элементов отображается в мобилке от края
    const viewedElementMobile = 2;
    const disabledNext = pageCount === currentPage || disabled;
    const disabledPrev = currentPage === 1 || disabled;

    const prevPage = useCallback(() => {
        if (!disabledPrev) {
            onChange!(currentPage - 1);
        }
    }, [disabledPrev, currentPage]);

    const nextPage = useCallback(() => {
        if (!disabledNext) {
            onChange!(currentPage + 1);
        }
    }, [disabledNext, currentPage]);

    const firstPages = new Array(
        pageCount <= viewedElementDesktop ? pageCount : viewedElementDesktop
    )
        .fill(0)
        .map((_, i) => i + 1);

    const lastPages = [];
    for (let i = pageCount; i > pageCount - viewedElementDesktop; i--) {
        lastPages.unshift(i);
    }

    const showThreeDots = pageCount > viewedElementDesktop + 1;
    const showThreeDotsMobile = pageCount > viewedElementMobile + 2;

    const getElem = (page: number) => {
        return (
            <PageElement
                page={page}
                isActive={page === currentPage}
                disabled={disabled}
                onClick={() => onChange!(page)}
            />
        );
    };

    const lessEightPagesView = <>{firstPages.map((page) => getElem(page))}</>;

    const pagesFromBeginView = (
        <>
            {firstPages.map((page) => getElem(page))}
            {showThreeDots && <ThreeDots />}
            {pageCount > currentPage && getElem(pageCount)}
        </>
    );

    const pagesFromBeginMobileView = (
        <>
            {getElem(1)}
            {getElem(2)}
            {showThreeDotsMobile && <ThreeDots />}
            {pageCount > currentPage && getElem(pageCount)}
        </>
    );

    const pagesBeforeEndView = (
        <>
            {getElem(1)}
            {showThreeDots && <ThreeDots />}
            {lastPages.map((page) => getElem(page))}
        </>
    );

    const pagesBeforeEndMobileView = (
        <>
            {getElem(1)}
            {showThreeDotsMobile && <ThreeDots />}
            {getElem(pageCount - 1)}
            {getElem(pageCount)}
        </>
    );

    const allPagesView = (
        <>
            {getElem(1)}
            <ThreeDots />
            {!isMobile && getElem(currentPage - 1)}
            {getElem(currentPage)}
            {!isMobile && getElem(currentPage + 1)}
            <ThreeDots />
            {getElem(pageCount)}
        </>
    );

    const paginationContent = () => {
        switch (true) {
            case currentPage < viewedElementMobile+1 && isMobile:
                return pagesFromBeginMobileView;

            case (pageCount < viewedElementDesktop + 1 && !isMobile) ||
                (pageCount < viewedElementMobile + 3 && isMobile):
                return lessEightPagesView;

            case pageCount - currentPage < viewedElementMobile && isMobile:
                return pagesBeforeEndMobileView;

            case currentPage > viewedElementMobile && isMobile:
                return allPagesView;

            case currentPage <= viewedElementDesktop - 3:
                return pagesFromBeginView;

            case currentPage > pageCount - viewedElementDesktop - 1:
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
