import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CollectionLink } from '../widgets';
import collection from '../assets/static/nft-9.png';

export default {
    title: 'Widgets/CollectionLink',
    component: CollectionLink,
} as ComponentMeta<typeof CollectionLink>;

const Template: ComponentStory<typeof CollectionLink> = (args) => (
    <CollectionLink {...args} />
);

export const Default = Template.bind({});

Default.args = {
    image: collection,
    title: 'CryptoDuckies',
    count: 9999
};
