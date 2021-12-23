import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, Text } from '../components';
import TableOuter from '../components/Table/TableOuter';
import { useState } from 'react';

export default {
    title: 'Components/Table',
    component: Table
} as ComponentMeta<typeof Table>;

let dataArray = [
    {
        action: 'Burn',
        time: '15-09-2021, 13:50:29',
        fee: '0.0003 QTZ',
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
        fee: '0.0004 QTZ',
        author: '14KBS…trcQH',
        result: '14KBS…trcQH'
    },
    {
        action: 'Transfer',
        time: '15-09-2021, 13:50:29',
        fee: '0.0002 QTZ',
        author: '14KBS…trcQH',
        result: 'Transfer failed'
    },
    {
        action: 'Transfer',
        time: '15-09-2021, 13:50:29',
        fee: '0.0006 QTZ',
        author: '14KBS…trcQH',
        result: '14KBS…trcQH'
    },
    {
        action: 'Mint',
        time: '15-09-2021, 13:50:29',
        fee: '0.0005 QTZ',
        author: '14KBS…trcQH',
        result: 'Token created'
    }
];


const Template: ComponentStory<typeof TableOuter> = (args) => {
    const [tableData, setTableData] = useState([...args.data]);
    const sorting = (column: string) => {
        let sortingTableData = args.data.sort((a, b) => {
            console.log('sort by column', column);
            console.log('a[column]', a[column]);
            console.log('b[column]', b[column]);
            if (a[column] > b[column]) {
                console.log('1');
                return 1;
            } else if (a[column] < b[column]) {
                console.log('2');
                return -1;
            } else {
                console.log('3');
                return 0;
            }
        });
        console.log('setTableData');
        console.log('dataArray', dataArray);
        setTableData([...sortingTableData]);
    };
    const clicking = (column: string) => {
        console.log('click on column', column);
        console.log('dataArray', dataArray);
    };
    const resultFromAction = {
        Burn: 'Token destroyed',
        Transfer: 'Transferred to',
        Mint: 'Token created'
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
            render: (rowNumber: number) => (
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
            render: (rowNumber: number) => (
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
            render: (rowNumber: number) => (
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
            render: (rowNumber: number) => (
                <Text size="m" color="primary-500">
                    {dataArray[rowNumber].author}
                </Text>
            )
        },
        {
            title: 'Result',
            dataIndex: 'result',
            key: 'result',
            render: (rowNumber: number) => (
                <>
                    <Text size="m" color="blue-grey-600">
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
    console.log('tableData', tableData);
    return <TableOuter data={[...tableData]} columns={columnsArray }></TableOuter>;
};

export const DefaultH1 = Template.bind({});
DefaultH1.args = {
    data: dataArray
};

DefaultH1.storyName = 'Default H1';
