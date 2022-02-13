import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CollectionCard } from '../widgets';
import collection from '../assets/static/collection.jpg';
import nft1 from '../assets/static/nft-1.png';
import nft2 from '../assets/static/nft-2.png';
import nft3 from '../assets/static/nft-3.png';
import nft4 from '../assets/static/nft-4.png';
import nft5 from '../assets/static/nft-5.png';
import nft6 from '../assets/static/nft-6.png';

export default {
    title: 'Widgets/CollectionCard',
    component: CollectionCard
} as ComponentMeta<typeof CollectionCard>;

const Template: ComponentStory<typeof CollectionCard> = (args) => (
    <CollectionCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
    avatar: collection,
    title: 'CryptoDuckies очень классные и позитивные',
    description:
        'Adopt yourself a Duckie and join The Flock.Each Duck is a 1 of 1 programmatically generated with a completely unique combination of traits. No two are identical. In total there are 5000 Duckies. Stay up to date on drops by joining the Discord and following',
    meta: {
        id: 123456,
        symbol: 'Duck',
        items: 10000,
        owner: '14KBS...trcQH'
    },
    badge: 'nft',
    tokens: [nft1, nft2, nft3, nft4, nft5, nft6],
    actions: [
        {
            title: 'Create token',
            appearance: {
                role: 'primary',
                size: 's'
            },
            onClick: () => console.log('Create token')
        },
        {
            title: 'Burn',
            appearance: {
                role: 'danger',
                size: 's',
                iconLeft: {
                    name: 'burn',
                    size: 15,
                    color: '#FF6335'
                }
            },
            onClick: () => console.log('Burn')
        }
    ],
    links: [
        {
            title: 'Go to Block Explorer',
            onClick: () => console.log('Go to Block Explorer')
        },
        {
            title: 'Go to Wallet',
            onClick: () => console.log('Go to Wallet')
        }
    ]
};

export const DefaultNoPreview = Template.bind({});

DefaultNoPreview.args = {
    avatar: collection,
    title: 'CryptoDuckies очень классные и позитивные',
    description:
        'Adopt yourself a Duckie and join The Flock.Each Duck is a 1 of 1 programmatically generated with a completely unique combination of traits. No two are identical. In total there are 5000 Duckies. Stay up to date on drops by joining the Discord and following',
    meta: {
        id: 123456,
        symbol: 'Duck',
        items: 10000
    },
    actions: [
        {
            title: 'Create token',
            appearance: {
                role: 'primary',
                size: 's'
            },
            onClick: () => console.log('Create token')
        },
        {
            title: 'Burn',
            appearance: {
                role: 'danger',
                size: 's',
                iconLeft: {
                    name: 'burn',
                    size: 15,
                    color: '#FF6335'
                }
            },
            onClick: () => console.log('Burn')
        }
    ],
    links: [
        {
            title: 'Go to Block Explorer',
            onClick: () => console.log('Go to Block Explorer')
        },
        {
            title: 'Go to Wallet',
            onClick: () => console.log('Go to Wallet')
        }
    ]
};

DefaultNoPreview.storyName = 'Default w/o preview';

export const DefaultNoDescription = Template.bind({});

DefaultNoDescription.args = {
    avatar: collection,
    title: 'CryptoDuckies очень классные и позитивные',
    meta: {
        id: 123456,
        symbol: 'Duck',
        items: 10000
    },
    tokens: [nft1, nft2, nft3, nft4, nft5, nft6],
    actions: [
        {
            title: 'Create token',
            appearance: {
                role: 'primary',
                size: 's'
            },
            onClick: () => console.log('Create token')
        },
        {
            title: 'Burn',
            appearance: {
                role: 'danger',
                size: 's',
                iconLeft: {
                    name: 'burn',
                    size: 15,
                    color: '#FF6335'
                }
            },
            onClick: () => console.log('Burn')
        }
    ],
    links: [
        {
            title: 'Go to Block Explorer',
            onClick: () => console.log('Go to Block Explorer')
        },
        {
            title: 'Go to Wallet',
            onClick: () => console.log('Go to Wallet')
        }
    ]
};

DefaultNoDescription.storyName = 'Default w/o description';

export const DefaultMinimal = Template.bind({});

DefaultMinimal.args = {
    title: 'CryptoDuckies',
    meta: {
        id: 123456,
        symbol: 'Duck',
        items: 10000
    },
    actions: [
        {
            title: 'Create token',
            appearance: {
                role: 'primary',
                size: 's'
            },
            onClick: () => console.log('Create token')
        },
        {
            title: 'Burn',
            appearance: {
                role: 'danger',
                size: 's',
                iconLeft: {
                    name: 'burn',
                    size: 15,
                    color: '#FF6335'
                }
            },
            onClick: () => console.log('Burn')
        }
    ],
    links: [
        {
            title: 'Go to Block Explorer',
            onClick: () => console.log('Go to Block Explorer')
        },
        {
            title: 'Go to Wallet',
            onClick: () => console.log('Go to Wallet')
        }
    ]
};

DefaultMinimal.storyName = 'Default minimal';
