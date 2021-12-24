/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '..';
import './Pagination.scss';

interface IPaginationProps {
    size: number;
    current: number;
    visible?: number;
    perPage?: number;
    withIcons?: boolean;
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
    size = 100,
    current = 0,
    visible = 5,
    perPage = 10,
    withIcons
}: IPaginationProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(current);
    const [perPageCount, setPerPageCount] = useState<number>(perPage);
    const totalCount = Math.ceil(size / perPageCount);
    const isLeftOffset = currentIndex > (visible - 1) / 2;
    const isRightOffset = currentIndex < totalCount - (visible - 1) / 2 - 1;
    const actualCount = Math.min(
        isLeftOffset && isRightOffset ? visible - 2 : visible,
        totalCount
    );
    const actualDelta = (actualCount - 1) / 2;
    const initialIndex =
        actualCount == totalCount
            ? 0
            : currentIndex < actualDelta
            ? 0
            : currentIndex + actualDelta >= totalCount
            ? totalCount - actualCount
            : currentIndex - actualDelta;

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
                    {isLeftOffset && (
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
                    {isRightOffset && (
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

export default React.memo(Pagination);
