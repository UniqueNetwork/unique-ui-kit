/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import './Table.scss';
import { TableProps } from '../../types';

const Table: FC<TableProps> = ({ columns, data }: TableProps) => (
    <div className="unique-table">
        <div className="unique-table-header">
            {columns.map((column) => (
                <div
                    key={`table-header-${column.field}`}
                    style={{ width: `calc(${column.width} - 32px)` }}
                >
                    {column.title}
                </div>
            ))}
        </div>
        <div className="unique-table-data">
            {data.map((row, index) => (
                <div
                    className="unique-table-data-row"
                    key={`table-row-${index}`}
                >
                    {columns.map((column) => (
                        <div
                            key={`table-cell-${index}-${column.field}`}
                            style={{ width: `calc(${column.width} - 32px)` }}
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

export default Table;
