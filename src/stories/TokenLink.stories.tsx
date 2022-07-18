import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TokenLink } from '../widgets';
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
    link: {
        href: '#',
        title: 'Chelobrickweuyriwueyruiweyuiryweuiyriuewyriuyweiuryiweyrwyeoiruwoeurpiweuriyweiruiweyr [id 3245]',
    },
};
