import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '../components';
import {
    TableBody,
    TableHead,
    TableHeaderCell,
    TableRow,
    TableCell,
    DashedDivider
} from '../components/Table/components';
import TableOuter from '../components/Table/TableOuter';

export default {
    title: 'Components/Table',
    component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
    <>
    <Table {...args}>
        {/* <TableHead>Hello</TableHead> */}
        <TableBody>
            <TableRow>
                <TableHeaderCell>Extrinsic</TableHeaderCell>
                <TableHeaderCell>Age</TableHeaderCell>
                <TableHeaderCell>From</TableHeaderCell>
                <TableHeaderCell>To</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
            </TableRow>
            <TableRow>
                <TableCell>a</TableCell>
                <TableCell>bbbbbbbbbbbbbbbbbbbbbbbb</TableCell>
                <TableCell>c</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
            </TableRow>

            <DashedDivider/>

            <TableRow>
                <TableCell>d</TableCell>
                <TableCell>e</TableCell>
                <TableCell>f</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
            </TableRow>
            <DashedDivider/>
        </TableBody>
    </Table>
    <TableOuter></TableOuter>
    </>
);

export const DefaultH1 = Template.bind({});

DefaultH1.args = {};

DefaultH1.storyName = 'Default H1';
