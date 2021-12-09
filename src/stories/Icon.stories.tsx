import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../components';

export default {
    title: 'Components/Icon',
    component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
    name: 'arrow-right',
    size: 20
};

Default.storyName = 'Default';

export const Color = Template.bind({});

Color.args = {
    name: 'arrow-right',
    color: '#1db0ff',
    size: 20
};

Color.storyName = 'Default w/ color';

export const Size = Template.bind({});

Size.args = {
    name: 'arrow-right',
    color: '#1db0ff',
    size: 30
};

Size.storyName = 'Default w/ size';
