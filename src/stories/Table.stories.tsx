import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link, Table } from '../components';
import { SortQuery } from '../types';
import { SORT_MODES } from '../constants';

const columns = [
    {
        title: 'Extrinsic',
        width: '20%',
        field: 'ext',
        render: (data: any) => <Link {...data.ext} />,
    },
    {
        title: 'Age',
        width: '20%',
        field: 'age',
    },
    {
        title: 'From',
        width: '20%',
        field: 'from',
        render: (data: any) => <Link {...data.from} />,
    },
    {
        title: 'To',
        width: '20%',
        field: 'to',
        render: (data: any) => <Link {...data.to} />,
    },
    { title: 'Amount', width: '20%', field: 'amount' },
];

const data = [
    {
        ext: { title: '9666737-0' },
        age: '11 secs',
        from: { title: '14KBS...trcQH' },
        to: { title: 'YqEew...11IJK' },
        amount: '2 QTZ',
    },
    {
        ext: { title: '9666828-1' },
        age: '16 secs',
        from: { title: '23AFx...oPPwR' },
        to: { title: '77NNm...lLk2L' },
        amount: '1 QTZ',
    },
    {
        ext: { title: '9666919-2' },
        age: '5 secs',
        from: { title: 'D3ws3...xpSm8' },
        to: { title: '21adF...99Ikkl' },
        amount: '3 QTZ',
    },
];

export default {
    title: 'Components/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = ({ data, columns }) => (
    <Table data={data} columns={columns} />
);

const TemplateBE: ComponentStory<typeof Table> = ({ data, columns }) => {
    const onSort = (sortQuery: SortQuery) => {
        console.log(
            `sorting by ${sortQuery.field} is ${SORT_MODES[sortQuery.mode]}`
        );
    };
    return <Table data={data} columns={columns} onSort={onSort} />;
};

export const Default = Template.bind({});

Default.args = {
    columns,
    data,
};

Default.storyName = 'Default';

export const DefaultIcons = Template.bind({});

DefaultIcons.args = {
    columns: [
        columns[0],
        {
            ...columns[1],
            iconRight: { name: 'clock', size: 16 },
        },
        columns[2],
        columns[3],
        columns[4],
    ],
    data,
};

DefaultIcons.storyName = 'Default w/ icons';

export const DefaultSortingFE = Template.bind({});

DefaultSortingFE.args = {
    columns: [
        columns[0],
        {
            ...columns[1],
            isSortable: true,
            compareFunc: (a: any, b: any) => {
                a = Number(a.split(' ')[0]);
                b = Number(b.split(' ')[0]);
                return a > b ? 1 : a < b ? -1 : 0;
            },
        },
        columns[2],
        columns[3],
        {
            ...columns[4],
            isSortable: true,
        },
    ],
    data,
};

DefaultSortingFE.storyName = 'Default w/ client sorting';

export const DefaultSortingBE = TemplateBE.bind({});

DefaultSortingBE.args = {
    columns: [
        columns[0],
        {
            ...columns[1],
            isSortable: true,
        },
        columns[2],
        columns[3],
        {
            ...columns[4],
            isSortable: true,
        },
    ],
    data,
};

DefaultSortingBE.storyName = 'Default w/ server sorting';

export const DeepValueInTable = TemplateBE.bind({});

DeepValueInTable.args = {
    columns: [
        { title: 'Test 1', field: 'test.test2.test3', width: '50%' },
        { title: 'Test 2', field: 'test.test2.test4[0].a', width: '50%' },
    ],
    data: [
        {
            test: {
                test2: {
                    test3: 'Table value 1',
                    test4: [{ a: 'Table value 2' }],
                },
            },
        },
    ],
};
DeepValueInTable.storyName = 'Deep value in table';
