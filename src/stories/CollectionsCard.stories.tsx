import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollectionsCard } from '../components';
import avatar from '../assets/img/avatar.jpg';

export default {
    title: 'Components/CollectionsCard',
    component: CollectionsCard
} as ComponentMeta<typeof CollectionsCard>;

const Template: ComponentStory<typeof CollectionsCard> = (args) => <CollectionsCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    avatar: {
        src: avatar,
        size: 64,
        type: 'circle'
    },
    title:'CryptoDuckies очень классные и позитивные',
    description:'Adopt yourself a Duckie and join The Flock.Each Duck is a 1 of 1 programmatically generated with a completely unique combination of traits. No two are identical. In total there are 5000 Duckies. Stay up to date on drops by joining the Discord and following',
    id:123456,
    symbol:'Duck',
    items:10000,
    owner: '14KBS…trcQH',
    withBorder: true
};

Default.storyName = 'Default';
