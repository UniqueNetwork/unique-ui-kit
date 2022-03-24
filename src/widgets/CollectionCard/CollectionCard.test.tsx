import { render } from '@testing-library/react';
import collection from '../../assets/static/collection.jpg';
import nft1 from '../assets/static/nft-1.png';
import nft2 from '../assets/static/nft-2.png';
import nft3 from '../assets/static/nft-3.png';
import nft4 from '../assets/static/nft-4.png';
import nft5 from '../assets/static/nft-5.png';
import nft6 from '../assets/static/nft-6.png';
import CollectionCard from './CollectionCard';

it('default props check', () => {
    render(
        <CollectionCard
            title={''}
            meta={{
                id: '',
                symbol: '',
                items: 0,
                owner: ''
            }}
        />
    );
});

it('set data props check', () => {
    render(
        <CollectionCard
            avatar={collection}
            title="test title"
            badge="coin"
            description="description text test"
            meta={{
                id: '123456',
                symbol: 'Duck',
                items: 10000,
                owner: '14KBS...trcQH'
            }}
            links={[
                {
                    title: 'Go to Block Explorer',
                    onClick: () => console.log('Go to Block Explorer')
                },
                {
                    title: 'Go to Wallet',
                    onClick: () => console.log('Go to Wallet')
                }
            ]}
            tokens={[nft1, nft2, nft3, nft4, nft5, nft6]}
            actions={[
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
                            color: 'var(--color-blue-grey-300)'
                        }
                    },
                    onClick: () => console.log('Burn')
                }
            ]}
        />
    );
});
