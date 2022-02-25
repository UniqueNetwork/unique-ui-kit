/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { Icon } from '..';
import { usePrevious } from '../../utils';
import './Pagination.scss';

interface IPaginationProps {
    size: number;
    current?: number;
    visible?: number;
    perPage?: number;
    withIcons?: boolean;
    onPageChange: (index: number) => void;
}

interface IPageItemProps {
    className: string;
    page?: number;
    children?: JSX.Element;
    onClick?: () => void;
}

const PageItem: FC<IPageItemProps> = ({ children, page, ...rest }) => (
    <div {...rest}>{children || page}</div>
);

const Pagination: FC<IPaginationProps> = ({
    size,
    current = 0,
    visible = 5,
    perPage = 10,
    withIcons,
    onPageChange
}: IPaginationProps) => {
    const isMobile = visible === 2;
    const [currentIndex, setCurrentIndex] = useState<number>(current);
    const [perPageCount, setPerPageCount] = useState<number>(perPage);
    const prevIndex: number = usePrevious<number>(currentIndex);
    const totalCount = Math.ceil(size / perPageCount);
    const isOffsetable = totalCount > 3;
    const hasLeftOffset =
        isOffsetable && currentIndex > (isMobile ? 1 : (visible - 1) / 2);
    const hasRightOffset =
        isOffsetable &&
        currentIndex < totalCount - (isMobile ? 1 : (visible - 1) / 2) - 1;
    const actualCount = isOffsetable
        ? Math.min(
              hasLeftOffset && hasRightOffset
                  ? isMobile
                      ? 1
                      : visible - 2
                  : visible,
              totalCount
          )
        : totalCount;
    const actualDelta = isMobile ? 2 : (actualCount - 1) / 2;
    const initialIndex = !isOffsetable
        ? 0
        : currentIndex < actualDelta
        ? 0
        : currentIndex + actualDelta >= totalCount
        ? totalCount - actualCount
        : isMobile
        ? currentIndex
        : currentIndex - actualDelta;

    useEffect(() => {
        prevIndex !== undefined && onPageChange(currentIndex);
    }, [prevIndex]);

    return (
        <div className="unique-pagination-wrapper">
            {totalCount > 1 && (
                <div className="pages-wrapper">
                    {withIcons && (
                        <PageItem
                            {...(currentIndex !== 0 && {
                                onClick: () => setCurrentIndex(currentIndex - 1)
                            })}
                            className={classNames('page-item', {
                                disabled: currentIndex === 0
                            })}
                        >
                            <Icon name="carret-left" size={12} />
                        </PageItem>
                    )}
                    {hasLeftOffset && (
                        <>
                            <PageItem
                                page={1}
                                onClick={() => setCurrentIndex(0)}
                                className="page-item"
                            />
                            <div className="page-ellipsis">...</div>
                        </>
                    )}
                    {[...new Array(actualCount)].map((_, index) => {
                        const offsetIndex = initialIndex + index;
                        return (
                            <PageItem
                                page={offsetIndex + 1}
                                onClick={() => setCurrentIndex(offsetIndex)}
                                key={offsetIndex}
                                className={classNames('page-item', {
                                    active: offsetIndex === currentIndex
                                })}
                            />
                        );
                    })}
                    {hasRightOffset && (
                        <>
                            <div className="page-ellipsis">...</div>
                            <PageItem
                                page={totalCount}
                                onClick={() => setCurrentIndex(totalCount - 1)}
                                className="page-item"
                            />
                        </>
                    )}
                    {withIcons && (
                        <PageItem
                            {...(currentIndex !== totalCount - 1 && {
                                onClick: () => setCurrentIndex(currentIndex + 1)
                            })}
                            className={classNames('page-item', {
                                disabled: currentIndex === totalCount - 1
                            })}
                        >
                            <Icon name="carret-right" size={12} />
                        </PageItem>
                    )}
                </div>
            )}
        </div>
    );
};

export default Pagination;
