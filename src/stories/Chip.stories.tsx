import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from '../components';
import nftImg from '../assets/static/nft-1.png';

export default {
    title: 'Components/Chip',
    component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Created by me',
};

Default.storyName = 'Default';

export const DefaultIcon = Template.bind({});

DefaultIcon.args = {
    label: 'CryptoDuckies',
    iconLeft: {
        size: 22,
        file: nftImg,
    },
};

DefaultIcon.storyName = 'Default w/ icon';
