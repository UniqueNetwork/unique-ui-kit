import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, Text } from '../components';
import { useState } from 'react';
import { TSize, TColor } from '../components/Table/TableContainer';

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

const Template: ComponentStory<typeof Table> = (args) => {
    const [tableData, setTableData] = useState([...args.data]);
    const sorting = (column: string) => {
        let sortingTableData = args.data.sort((a, b) => {
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
        console.log('click on column', column);
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
            headingTextSize: 'm' as TSize,
            color: 'blue-grey' as TColor,
            icon: 'arrows-down-up',
            render: (rowNumber: number) => (
                <Text size="m" color="additional-dark">
                    {dataArray[rowNumber].action}
                </Text>
            ),
            columnHeadingClickHandle: sorting
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            width: 200,
            headingTextSize: 'm' as TSize,
            color: 'primary' as TColor,
            icon: 'clock',
            render: (rowNumber: number) => (
                <Text size="m" color="additional-dark">
                    {dataArray[rowNumber].time}
                </Text>
            ),
            columnHeadingClickHandle: clicking
        },
        {
            title: 'Fee',
            dataIndex: 'fee',
            key: 'fee',
            width: 150,
            icon: 'arrows-down-up',
            render: (rowNumber: number) => (
                <Text size="m" color="additional-dark">
                    {dataArray[rowNumber].fee}
                </Text>
            ),
            columnHeadingClickHandle: sorting
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
            width: 150,
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
    return (
        <Table {...args} data={[...tableData]} columns={columnsArray}></Table>
    );
};

export const Default = Template.bind({});
Default.args = {
    data: dataArray,
    title: 'Table title'
};

Default.storyName = 'Default';
