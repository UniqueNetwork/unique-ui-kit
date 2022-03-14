import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Tooltip } from '../components';

export default {
    title: 'Components/Tooltip',
    component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <Tooltip {...args}>( i )</Tooltip>
);

export const Default = Template.bind({});

Default.args = {
    text: 'tooltip text'
};

Default.storyName = 'Tooltip example';
