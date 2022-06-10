import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from '../components';

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Default = Template.bind({});

Default.args = {
    width: '100%',
    height: 50,
    type: 'square'
};

Default.storyName = 'Default';

export const Circle = Template.bind({});

Circle.args = {
    width: 100,
    height: 100,
    type: 'circle'
};

Circle.storyName = 'Default circle';
