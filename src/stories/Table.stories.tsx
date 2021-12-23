import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components';
import Table from '../components/Table/TableContainer';
import { useState } from 'react';

export default {
    title: 'Components/Table',
    component: Table
} as ComponentMeta<typeof Table>;

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
        fee: '0.0004 QTZ',
        author: '14KBS…trcQH',
        result: '14KBS…trcQH'
    },
    {
        action: 'Transfer',
        time: '15-09-2021, 13:50:29',
        fee: '0.0003 QTZ',
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

const Template: ComponentStory<typeof Table> = (args) => {
    const [tableData, setTableData] = useState([ ...args.data ]);
    const sorting = (column: string) => {
        let sortingTableData = tableData.sort((a, b) => {
            if (a[column] > b[column]) {
                return 1;
            } else if (a[column] < b[column]) {
                return -1;
            } else {
                return 0;
            }
        });
        setTableData([...sortingTableData]);
    };
    const clicking = (column: string) => {
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
            size: 'm' as 'm',
            color: 'blue-grey' as 'blue-grey',
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
            size: 'm' as 'm',
            color: 'primary' as 'primary',
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
                        {
                            resultFromAction[
                                dataArray[rowNumber].action as 'Burn'
                            ]
                        }
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
    let clonedTableArray = tableData.map(a => {return {...a}})
    return <Table data={[...clonedTableArray]} columns={columnsArray}></Table>;
};

export const Default = Template.bind({});
Default.args = {
    data: dataArray
};

Default.storyName = 'Default';
