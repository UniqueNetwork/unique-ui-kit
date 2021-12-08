import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../components';

export default {
    title: 'Components/Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
    <Pagination {...args} />
);

export const Default = Template.bind({});

Default.args = {
    pageCount: 800000,
    currentPage: 3,
};

Default.storyName = 'Default';
