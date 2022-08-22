import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from '../components';

export default {
    title: 'Components/Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ ...args }) => (
    <Alert {...args} />
);

export const Default = Template.bind({});

Default.args = {
    type: 'warning',
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat optio iusto. Ipsa fugit quo iure, et eaque unde quae numquam dignissimos. Doloremque nam similique ipsum neque, temporibus consectetur deleniti.',
};

Default.storyName = 'Default';
