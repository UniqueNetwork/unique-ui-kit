import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../components';

export default {
    title: 'Components/Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>;

const TemplatePages: ComponentStory<typeof Pagination> = (args) => {
    return <Pagination {...args} />;
};

export const Default = TemplatePages.bind({});

Default.args = {
    withIcons: true
};

Default.storyName = 'Default';

export const DefaultSize = TemplatePages.bind({});

DefaultSize.args = {
    size: 99999,
    withIcons: true
};

DefaultSize.storyName = 'Default w/ size';

export const DefaultVisible = TemplatePages.bind({});

DefaultVisible.args = {
    visible: 3,
    withIcons: true
};

DefaultVisible.storyName = 'Default w/ visible';

export const DefaultCurrent = TemplatePages.bind({});

DefaultCurrent.args = {
    current: 4,
    withIcons: true
};

DefaultCurrent.storyName = 'Default w/ current';
