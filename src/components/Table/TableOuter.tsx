/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC} from 'react';
import './TableOuter.scss';
import {
    DashedDivider,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow
} from './components';
import { Table } from '..';
import { Text, Icon } from '../../components';

interface ITableOuterProps {
    columns: [
        {
            title: string;
            dataIndex: string;
            key: string;
            width?: number;
            size?: 'm' | 's';
            color?: 'primary' | 'blue-grey';
            icon?: string;
            render: (rowNumber?: number) => {};
            columnClickHandle: (column: string) => {};
        }
    ];
    data: [];
    className?: string;
}


const TableOuter: FC<ITableOuterProps> = ({
    columns,
    data,
    className
}: ITableOuterProps) => {

    const tableHead = (
        <TableRow>
            {columns.map((column) => {
                return (
                    <TableHeaderCell key={column.key}>
                        <div
                            className="column"
                            onClick={
                                column.columnClickHandle
                                    ? () => column.columnClickHandle(column.key)
                                    : () => {}
                            }
                        >
                            <Text size={column.size || 'm'} color={column.color==='primary'?'primary-500':'blue-grey-600'}>
                                {column.title}
                            </Text>
                            {column.icon && (
                                <div className="icon-wrapper">
                                    <Icon
                                        color={
                                            column.color === 'primary'
                                                ? '#009CF0'
                                                : '#647789'
                                        }
                                        name={column.icon}
                                        size={13}
                                    ></Icon>
                                </div>
                            )}
                        </div>
                    </TableHeaderCell>
                );
            })}
        </TableRow>
    );
    console.log('data', data);
    const tableBody = data.map((rowData, i) => {
        
        const row = columns.map((column) => {
            return (
                <TableCell key={`${column.key}-${i}`}>
                    {column.render ? column.render(i) : rowData[column.key]}
                </TableCell>
            );
        });
        return (
            <>
                <TableRow key={i}>{row}</TableRow>
                <DashedDivider />
            </>
        );
    });

    return (
        <Table className="unique-table-outer">
            <TableHead>{tableHead}</TableHead>
            <TableBody>{tableBody}</TableBody>
        </Table>
    );
};

export default TableOuter;
