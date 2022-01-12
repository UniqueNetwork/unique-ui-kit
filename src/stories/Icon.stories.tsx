import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../components';
import IconPalette from '../components/IconList/IconList';

export default {
    title: 'Components/Icon',
    component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

const TemplatePallete: ComponentStory<typeof Icon> = (args) => (
    <IconPalette {...args} />
);

export const Default = Template.bind({});

Default.args = {
    name: 'arrow-right',
    size: 20
};

Default.storyName = 'Default';

export const Color = Template.bind({});

Color.args = {
    name: 'arrow-right',
    color: '#009cf0',
    size: 20
};

Color.storyName = 'Default w/ color';

export const Size = Template.bind({});

Size.args = {
    name: 'arrow-right',
    color: '#009cf0',
    size: 30
};

Size.storyName = 'Default w/ size';

export const IconList = TemplatePallete.bind({});

IconList.args = {
    name: 'arrow-right',
    size: 20,
    names: ['arrow-right']
};

IconList.storyName = 'IconList';
