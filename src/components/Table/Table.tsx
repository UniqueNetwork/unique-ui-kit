/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '..';
import { getDeepValue, sortData } from '../../utils';
import { SortQuery, TableProps, TableRow } from '../../types';
import { SORT_MODES } from '../../constants';
import './Table.scss';

const Table: FC<TableProps> = ({ columns, data, onSort }: TableProps) => {
    const [sortQuery, setSortQuery] = useState<SortQuery>({
        field: '',
        mode: 0,
    });
    const sortedData: TableRow[] = onSort
        ? data
        : sortData(
              data,
              sortQuery,
              columns.find((column) => column.field === sortQuery.field)
                  ?.compareFunc
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
                        isSortable,
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
                                    active: isQueryField && !isInitialMode,
                                })}
                                key={field}
                                style={{ width: `calc(${width} - 32px)` }}
                            >
                                {title}
                                {isSortable && (
                                    <div
                                        className="table-header-sorter"
                                        onClick={() => {
                                            const columnQuery = {
                                                field,
                                                mode: isQueryField
                                                    ? (sortQuery.mode + 1) % 3
                                                    : 1,
                                            };
                                            setSortQuery(columnQuery);
                                            onSort?.(columnQuery);
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
                                    width: `calc(${column.width} - 32px)`,
                                }}
                            >
                                {column.render?.(
                                    getDeepValue(row, column.field)
                                ) || getDeepValue(row, column.field)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
