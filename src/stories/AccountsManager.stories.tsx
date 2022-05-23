import { AccountsManager } from '../widgets';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../components';
import { IAccount, INetwork } from '../widgets/AccountsManager/types';
import { useState } from 'react';

export default {
    title: 'Widgets/AccountsManager',
    component: AccountsManager,
} as ComponentMeta<typeof AccountsManager>;

const Template: ComponentStory<typeof AccountsManager> = (args) => {
    const [selectedAccount, setSelectedAccount] = useState<IAccount>({
        name: 'hrumhrum10',
        address: '5Gxot0000000000000000000000004Y6cj',
    });
    const [activeNetwork, setActiveNetwork] = useState<INetwork>({
        id: 'quartz',
        name: 'Quartz',
        icon: { name: 'chain-quartz', size: 40 },
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <AccountsManager
                {...args}
                selectedAccount={selectedAccount}
                onAccountChange={setSelectedAccount}
                activeNetwork={activeNetwork}
                onNetworkChange={setActiveNetwork}
                onManageBalanceClick={() =>
                    console.log('manage balance link click')
                }
                onCopyAddressClick={() => console.log('copy address click')}
            />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    balance: '98989888.0089',
    deposit: '0.008',
    depositDescription: (
        <Text size={'xs'} color={'grey-500'}>
            The total market deposit for participation in auctions and
            sponsorship. Use the “Manage my balance” section to withdraw.
        </Text>
    ),
    manageBalanceLinkTitle: 'Manage my balance',
    symbol: 'KSM',
    accounts: [
        {
            name: 'hrumhrum10',
            address: '5Gxot0000000000000000000000004Y6cj',
        },
        {
            name: 'hrumhrum99',
            address: '5Gdfg0000000000000000000000005B36l',
        },
    ],
    networks: [],
};

Default.storyName = 'Market';

export const Wallet = Template.bind({});

Wallet.args = {
    balance: '98989888.0089',
    manageBalanceLinkTitle: 'Manage my balance',
    symbol: 'KSM',
    accounts: [
        {
            name: 'hrumhrum10',
            address: '5Gxot0000000000000000000000004Y6cj',
        },
        {
            name: 'hrumhrum99',
            address: '5Gdfg0000000000000000000000005B36l',
        },
    ],
    networks: [
        {
            id: 'quartz',
            name: 'Quartz',
            icon: { name: 'chain-quartz', size: 40 },
        },
        {
            id: 'opal',
            name: 'Opal',
            icon: { name: 'chain-opal', size: 40 },
        },
    ],
};

Wallet.storyName = 'Wallet';
