import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TokenLink } from '../widgets';
import { Button } from '../components';
import collection from '../assets/static/nft-8.png';

export default {
    title: 'Widgets/TokenLink',
    component: TokenLink,
} as ComponentMeta<typeof TokenLink>;

const Template: ComponentStory<typeof TokenLink> = (args) => (
    <TokenLink {...args} />
);

export const Default = Template.bind({});

Default.args = {
    image: collection,
    title: 'Chel #5498',
    link: 'Chelobrick [id 3245]',
    onTokenClick: () => {
        console.log('token click');
    },
    onMetaClick: () => {
        console.log('meta click');
    },
};

export const DefaultMeta = Template.bind({});

DefaultMeta.args = {
    image: collection,
    title: 'Chel #5498',
    link: 'Chelobrick [id 3245]',
    meta: (
        <Button
            title="Click me"
            onClick={() => {
                console.log('button click');
            }}
        />
    ),
};

DefaultMeta.storyName = 'Default w/ meta';
