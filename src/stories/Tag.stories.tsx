import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from '../components';

export default {
    title: 'Components/Tag',
    component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Default tag',
};

Default.storyName = 'Default';

export const Info = Template.bind({});

Info.args = {
    role: 'info',
    label: 'Info tag',
};

Info.storyName = 'Info';
