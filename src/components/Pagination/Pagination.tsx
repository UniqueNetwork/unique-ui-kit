/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC, useCallback } from 'react';
import cn from 'classnames';
import './Pagination.scss';
import { PageElement } from './components/PageElement';
import { ThreeDots } from './components/ThreeDots';
import { Icon } from '../../components';
import { usePagination } from './usePagination';

interface IPaginationProps {
    pageCount: number;
    currentPage: number;
    className?: string;
    disabled?: boolean;
    showPrevButton?: boolean;
    showNextButton?: boolean;
    siblingCount?: 0 | 1;
    onChange?: (currentPage: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
    pageCount,
    currentPage = 0,
    className,
    disabled = false,
    showPrevButton = true,
    showNextButton = true,
    siblingCount = 1,
    onChange
}: IPaginationProps) => {
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

    const paginationRange = usePagination({
        currentPage,
        pageCount,
        siblingCount
    });

    return (
        <ul className={cn(className, `unique-pagination-wrapper`)}>
            {showPrevButton && (
                <div className={cn('icon-wrapper', { disabled: disabledPrev })} onClick={prevPage}>
                    <Icon
                        name="caret-left"
                        size={12}
                        className={cn('icon', { disabled: disabledPrev })}
                    />
                </div>
            )}
            {paginationRange?.map((pageElement, i) => {
                if (pageElement === 'dots') {
                    return <ThreeDots key={`${pageElement}-${i}`} />;
                }
                return (
                    <PageElement
                        key={pageElement}
                        page={pageElement as number}
                        isActive={pageElement === currentPage}
                        disabled={disabled}
                        onClick={() => onChange!(pageElement as number)}
                    />
                );
            })}
            {showNextButton && (
                <div className={cn('icon-wrapper', { disabled: disabledNext })} onClick={nextPage}>
                    <Icon
                        name="caret-right"
                        size={12}
                        className={cn('icon', { disabled: disabledNext })}
                    />
                </div>
            )}
        </ul>
    );
};

export default Pagination;
