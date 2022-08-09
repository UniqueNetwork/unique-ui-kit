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
    { name: 'chain-quartz', size: 40 },
    { name: 'chain-opal', size: 40 },
    { name: 'chain-kusama', size: 40 },
    { name: 'chain-unique', size: 40 },
    { name: 'chain-polkadot', size: 40 },
    { name: 'social-discord', size: 40 },
    { name: 'social-github', size: 40 },
    { name: 'social-subsocial', size: 40 },
    { name: 'social-telegram', size: 40 },
    { name: 'social-twitter', size: 40 },
    { name: 'social-reddit', size: 40 },
    { name: 'social-facebook', size: 40 },
    { name: 'box', size: 50 },
    { name: 'magnifier-found', size: 50 },
    { name: 'not-found', size: 50 },
    { name: 'no-trades', size: 50 },
    { name: 'no-accounts', size: 50 },
    { name: 'usd-flag' },
    { name: 'rub-flag' },
    { name: 'jpy-flag' },
    { name: 'gbp-flag' },
    { name: 'eur-flag' },
    { name: 'cny-flag' },
    { name: 'badge-nft' },
    { name: 'badge-crown' },
    { name: 'badge-coin' },
    { name: 'clock' },
    { name: 'gear' },
    { name: 'user' },
    { name: 'upload' },
    { name: 'menu' },
    { name: 'checked' },
    { name: 'check-circle' },
    { name: 'magnify' },
    { name: 'triangle' },
    { name: 'eye' },
    { name: 'eye-closed' },
    { name: 'arrow-left' },
    { name: 'arrow-right' },
    { name: 'arrow-up' },
    { name: 'arrow-down' },
    { name: 'pencil' },
    { name: 'carret-right' },
    { name: 'carret-left' },
    { name: 'carret-up' },
    { name: 'carret-down' },
    { name: 'close' },
    { name: 'burn' },
    { name: 'sorting-initial' },
    { name: 'sorting-desc' },
    { name: 'sorting-asc' },
    { name: 'question' },
    { name: 'plus' },
    { name: 'minus' },
    { name: 'copy' },
    { name: 'circle-close' },
    { name: 'reload' },
    { name: 'logout' },
    { name: 'arrow-up-right' },
    { name: 'more-horiz' },
    { name: 'rounded-rectangle-more' },
    { name: 'shared' },
    { name: 'warning' },
    { name: 'success' },
    { name: 'empty-image' },
    { name: 'no-items' },
    { name: 'trash' },
    { name: 'bundle' },
    { name: 'confetti' },
    { name: 'puzzle' },
];

Icon.args = {
    icons,
};

Icon.storyName = 'Base icons';
