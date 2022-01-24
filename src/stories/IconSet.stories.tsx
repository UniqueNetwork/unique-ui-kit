import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconSet } from '../internals';

export default {
    title: 'Design Tokens/Icons',
    component: IconSet
} as ComponentMeta<typeof IconSet>;

const TemplatePallete: ComponentStory<typeof IconSet> = (args) => (
    <IconSet {...args} />
);

export const Icon = TemplatePallete.bind({});

const icons = [
    'checked',
    'magnify',
    'triangle',
    'eye-closed',
    'arrow-down',
    'arrow-up',
    'arrow-left',
    'arrow-right',
    'pencil',
    'carret-right',
    'carret-left',
    'social-discord',
    'social-github',
    'social-subsocial',
    'social-telegram',
    'social-twitter'
];

Icon.args = {
    icons
};

Icon.storyName = 'Base icons';
