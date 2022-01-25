import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link, Table } from '../components';

export default {
    title: 'Components/Table',
    component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
    return <Table {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    columns: [
        {
            title: 'Extrinsic',
            width: '20%',
            field: 'ext',
            render: (data: any) => <Link {...data} />
        },
        { title: 'Age', width: '20%', field: 'age' },
        {
            title: 'From',
            width: '20%',
            field: 'from',
            render: (data: any) => <Link {...data} />
        },
        {
            title: 'To',
            width: '20%',
            field: 'to',
            render: (data: any) => <Link {...data} />
        },
        { title: 'Amount', width: '20%', field: 'amount' }
    ],
    data: [
        {
            ext: { title: '9666737-0' },
            age: '11 secs ago',
            from: { title: '14KBS...trcQH' },
            to: { title: '14KBS...trcQH' },
            amount: '1 QTZ'
        },
        {
            ext: { title: '9666737-0' },
            age: '16 secs ago',
            from: { title: '14KBS...trcQH' },
            to: { title: '14KBS...trcQH' },
            amount: '1 QTZ'
        },
        {
            ext: { title: '9666737-0' },
            age: '21 secs ago',
            from: { title: '14KBS...trcQH' },
            to: { title: '14KBS...trcQH' },
            amount: '1 QTZ'
        }
    ]
};

Default.storyName = 'Default';
