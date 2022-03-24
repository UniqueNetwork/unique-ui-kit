/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icon, InputText, Select } from '..';
import { usePrevious } from '../../utils';
import './Pagination.scss';

interface IPaginationProps {
    size: number;
    current?: number;
    visible?: number;
    perPage?: number;
    pageSizes?: number[];
    withIcons?: boolean;
    withPageSelector?: boolean;
    withPerPageSelector?: boolean;
    onPageChange: (index: number) => void;
    onGoToPage?: (index: number) => void;
    onPageSizeChange?: (size: number) => void;
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
    pageSizes = [10, 20, 50, 100],
    withIcons,
    withPageSelector,
    withPerPageSelector,
    onPageChange,
    onGoToPage,
    onPageSizeChange
}: IPaginationProps) => {
    const isMobile = visible === 2;
    const [currentIndex, setCurrentIndex] = useState<number>(current);
    const [perPageCount, setPerPageCount] = useState<number>(pageSizes[0]);
    const [currentSelector, setCurrentSelector] = useState<string>('');
    const prevIndex: number = usePrevious<number>(currentIndex);
    const totalCount = Math.ceil(size / perPageCount);
    const isOffsetable = totalCount > 3 && visible < totalCount;
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
    }, [currentIndex]);

    return (
        <div className="unique-pagination-wrapper">
            {withPerPageSelector && (
                <div className="per-page-selector-wrapper">
                    {size} Items
                    <Select
                        options={pageSizes.map((option) => ({
                            id: option.toString(),
                            title: option.toString()
                        }))}
                        size="small"
                        value={perPageCount.toString()}
                        onChange={(option) => {
                            setPerPageCount(Number(option.title));
                            setCurrentIndex(0);
                            setCurrentSelector('');
                            onPageSizeChange?.(Number(option.title));
                        }}
                    />
                </div>
            )}
            <div className="pages-wrapper">
                {withIcons && (
                    <PageItem
                        {...(currentIndex !== 0 && {
                            onClick: () => {
                                currentSelector && setCurrentSelector('');
                                setCurrentIndex(currentIndex - 1);
                            }
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
                            onClick={() => {
                                currentSelector && setCurrentSelector('');
                                setCurrentIndex(0);
                            }}
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
                            onClick={() => {
                                currentSelector && setCurrentSelector('');
                                setCurrentIndex(offsetIndex);
                            }}
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
                            onClick={() => {
                                setCurrentIndex(totalCount - 1);
                                currentSelector && setCurrentSelector('');
                            }}
                            className="page-item"
                        />
                    </>
                )}
                {withIcons && (
                    <PageItem
                        {...(currentIndex !== totalCount - 1 && {
                            onClick: () => {
                                currentSelector && setCurrentSelector('');
                                setCurrentIndex(currentIndex + 1);
                            }
                        })}
                        className={classNames('page-item', {
                            disabled: currentIndex === totalCount - 1
                        })}
                    >
                        <Icon name="carret-right" size={12} />
                    </PageItem>
                )}
            </div>
            {withPageSelector && (
                <div className="page-selector-wrapper">
                    Go to:
                    <InputText
                        maxLength={5}
                        value={currentSelector}
                        role="number"
                        size="small"
                        onChange={(index) => setCurrentSelector(`${index}`)}
                        onKeyDown={(e) => {
                            if (
                                e.code === 'Enter' &&
                                Number(currentSelector) > 0
                            ) {
                                const page =
                                    Number(currentSelector) === 0
                                        ? 1
                                        : Number(currentSelector) > totalCount
                                        ? totalCount
                                        : Number(currentSelector);
                                setCurrentIndex(page - 1);
                                onGoToPage?.(page);
                            }
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Pagination;
