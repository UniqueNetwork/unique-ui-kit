/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
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
    columns?: [
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
    data?: [];
    className?: string;
}
const resultFromAction = {
    Burn: 'Token destroyed',
    Transfer: 'Transferred to',
    Mint: 'Token created'
};

const iconFromAction = {
    Burn: 'Token destroyed',
    Transfer: 'Transferred to',
    Mint: 'Token created'
};

let dataArray = [
    {
        action: 'Burn',
        time: '15-09-2021, 13:50:29',
        fee: '0.0001 QTZ',
        author: '14KBS…trcQH',
        result: 'Token destroyed'
    },
    {
        action: 'Transfer',
        time: '15-09-2021, 13:50:29',
        fee: '0.0001 QTZ',
        author: '14KBS…trcQH',
        result: '14KBS…trcQH'
    },
    {
        action: 'Transfer',
        time: '15-09-2021, 13:50:29',
        fee: '0.0001 QTZ',
        author: '14KBS…trcQH',
        result: '14KBS…trcQH'
    },
    {
        action: 'Transfer',
        time: '15-09-2021, 13:50:29',
        fee: '0.0001 QTZ',
        author: '14KBS…trcQH',
        result: 'Transfer failed'
    },
    {
        action: 'Transfer',
        time: '15-09-2021, 13:50:29',
        fee: '0.0001 QTZ',
        author: '14KBS…trcQH',
        result: '14KBS…trcQH'
    },
    {
        action: 'Mint',
        time: '15-09-2021, 13:50:29',
        fee: '0.0001 QTZ',
        author: '14KBS…trcQH',
        result: 'Token created'
    }
];
const sorting = (column:string) => {
    dataArray = dataArray.sort((a,b)=>{
        console.log('sort by column', column);
        console.log('a[column]', a[column]);
        console.log('b[column]', b[column]);
        if(a[column]>b[column]){
            console.log('1');
            return 1;
        } else if(a[column]<b[column]){
            console.log('2');
            return -1;
        } else {
            console.log('3');
            return 0;
        }

        console.log('dataArray', dataArray);
})};
const clicking = (column:string) => {
    console.log('click on column', column);
    console.log('dataArray', dataArray);
};
const columnsArray = [
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: 100,
        size: 'm',
        color: 'blue-grey',
        icon: 'arrows-down-up',
        render: (rowNumber:number) => (
            <Text size="m" color="additional-dark">
                {dataArray[rowNumber].action}
            </Text>
        ),
        columnClickHandle: sorting
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        width: 100,
        size: 'm',
        color: 'primary',
        icon: 'clock',
        render: (rowNumber:number) => (
            <Text size="m" color="additional-dark">
                {dataArray[rowNumber].time}
            </Text>
        ),
        columnClickHandle: clicking
    },
    {
        title: 'Fee',
        dataIndex: 'fee',
        key: 'fee',
        width: 200,
        icon: 'arrows-down-up',
        render: (rowNumber:number) => (
            <Text size="m" color="additional-dark">
                {dataArray[rowNumber].fee}
            </Text>
        ),
        columnClickHandle: sorting
    },
    {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        width: 200,
        render: (rowNumber:number) => (
            <Text size="m" color="primary-500">
                {dataArray[rowNumber].author}
            </Text>
        )
    },
    {
        title: 'Result',
        dataIndex: 'result',
        key: 'result',
        render: (rowNumber:number) => (
            <>
                <Text size="m" color='blue-grey-600'>
                    {resultFromAction[dataArray[rowNumber].action]}
                </Text>
                &nbsp;
                <Text size="m" color="primary-500">
                    {dataArray[rowNumber].action === 'Transfer'
                        ? dataArray[rowNumber].result
                        : ''}
                </Text>
            </>
        )
    }
];

const TableOuter: FC<ITableOuterProps> = ({
    columns = [...columnsArray],
    data = [...dataArray],
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
    const tableBody = data.map((rowData, i) => {
        console.log('data', data);
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
