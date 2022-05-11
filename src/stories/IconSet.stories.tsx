import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconSet } from '../internals';

export default {
    title: 'Design Tokens/Icons',
    component: IconSet,
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
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-down',
    'pencil',
    'carret-right',
    'carret-left',
    'carret-down',
    'close',
    'burn',
    'sorting-initial',
    'sorting-desc',
    'sorting-asc',
    'clock',
    'badge-nft',
    'badge-gear',
    'badge-crown',
    'badge-coin',
    'chain-quartz',
    'chain-opal',
    'chain-kusama',
    'chain-unique',
    'social-discord',
    'social-github',
    'social-subsocial',
    'social-telegram',
    'social-twitter',
    'question',
    'plus',
    'minus',
    'copy',
    'circle-close',
    'reload',
    'logout',
    'arrow-up-right',
    'more-horiz',
    'rounded-rectangle-more',
    'shared',
    'box',
    'magnifier-found',
];

Icon.args = {
    icons,
};

Icon.storyName = 'Base icons';
