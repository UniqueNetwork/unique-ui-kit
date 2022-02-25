/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import classNames from 'classnames';
import React, { FC, useMemo, useState } from 'react';
import { Icon } from '..';
import { SORT_MODES } from '../../constants';
import { SortQuery, TableProps, TableRow } from '../../types';
import { sortData } from '../../utils';
import './Table.scss';

const Table: FC<TableProps> = ({ columns, data, onSort }: TableProps) => {
    const [sortQuery, setSortQuery] = useState<SortQuery>({
        field: '',
        mode: 0
    });
    const sortedData: TableRow[] = useMemo(
        () =>
            sortData(
                data,
                sortQuery,
                columns.find((column) => column.field === sortQuery.field)
                    ?.compareFunc
            ),
        [sortQuery]
    );
    return (
        <div className="unique-table">
            <div className="unique-table-header">
                {columns.map(
                    ({
                        title,
                        width,
                        field,
                        iconLeft,
                        iconRight,
                        isSortable
                    }) => {
                        const hasIcon = iconLeft || iconRight;
                        const isQueryField = field === sortQuery.field;
                        const isInitialMode = sortQuery.mode === 0;
                        return (
                            <div
                                className={classNames('table-header-cell', {
                                    'with-icon': hasIcon || isSortable,
                                    'to-left': iconLeft,
                                    'to-right': iconRight || isSortable,
                                    sortable: isSortable,
                                    active: isQueryField && !isInitialMode
                                })}
                                key={field}
                                style={{ width: `calc(${width} - 32px)` }}
                            >
                                {title}
                                {isSortable && onSort && (
                                    <div
                                        className="table-header-sorter"
                                        onClick={() => {
                                            const columnQuery = {
                                                field,
                                                mode: isQueryField
                                                    ? (sortQuery.mode + 1) % 3
                                                    : 1
                                            };
                                            setSortQuery(columnQuery);
                                            onSort(columnQuery);
                                        }}
                                    >
                                        <Icon
                                            name={`sorting-${
                                                SORT_MODES[
                                                    isQueryField
                                                        ? sortQuery.mode
                                                        : 0
                                                ]
                                            }`}
                                            size={14}
                                        />
                                    </div>
                                )}
                                {hasIcon && <Icon {...hasIcon} />}
                            </div>
                        );
                    }
                )}
            </div>
            <div className="unique-table-data">
                {sortedData.map((row, index) => (
                    <div className="unique-table-data-row" key={index}>
                        {columns.map((column) => (
                            <div
                                key={column.field}
                                style={{
                                    width: `calc(${column.width} - 32px)`
                                }}
                            >
                                {column.render
                                    ? column.render(row[column.field])
                                    : row[column.field]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
