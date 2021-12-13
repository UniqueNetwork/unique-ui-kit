import { useMemo } from 'react';

interface IPaginationRange {
    pageCount: number;
    siblingCount: number;
    currentPage: number;
}

export const usePagination = ({
    pageCount,
    siblingCount,
    currentPage
}: IPaginationRange) => {
    const paginationRange = useMemo(() => {
    const range = (start: number, end: number) => {
        let length = end - start + 1;
        if (length > pageCount) {
            length = pageCount;
        }
        return Array.from({ length }, (_, idx) => idx + start);
    };

    let leftRange;
    let rightRange;
    let middleRange;
    let showLeftDots;
    let showRightDots;

    if (siblingCount === 0) {
        leftRange = range(1, 2);
        rightRange = range(pageCount - 1, pageCount);
        showLeftDots = currentPage > 2 && pageCount>3;
        showRightDots = (pageCount - currentPage > 1) && pageCount>3;
    } else {
        leftRange = range(1, 7);
        rightRange = range(pageCount - 6, pageCount);
        showLeftDots = currentPage > 4 && pageCount>8;
        showRightDots = pageCount - currentPage > 5 && pageCount>8;
    }
    middleRange = range(currentPage - siblingCount, currentPage + siblingCount);
    // display all page
    if (!showLeftDots && !showRightDots) {
        return range(1, pageCount);
    }
    //display first page from begin: without left dots
    if (!showLeftDots) {
        return [...leftRange, 'dots', pageCount];
    }
    //display last page before end: without right dots
    if (!showRightDots) {
        return [1, 'dots', ...rightRange];
    }
    //display with both dots
    if (showLeftDots && showRightDots) {
        return [1, 'dots', ...middleRange, 'dots', pageCount];
    }
},[pageCount, siblingCount, currentPage]);

    return paginationRange;
};
