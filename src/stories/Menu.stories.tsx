import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Menu } from '../widgets';

export default {
    title: 'Widgets/Menu',
    component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
    const [account, setAccount] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [rate, setRate] = useState(undefined);
    return (
        <Menu
            {...args}
            account={account}
            value={token}
            token={token}
            rate={rate}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onChangeToken={(value: any) => {
                setToken(value);
            }}
            onChangeRate={(value: any) => {
                setRate(value);
            }}
            onChangeAccount={(value: any) => {
                setAccount(value);
            }}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    tokens: [
        {
            id: 'id1',
            title: 'Quartz (Kusama)',
            abbreviation: 'QTZ',
            icon: { name: 'chain-quartz', size: 16 }
        },
        {
            id: 'id2',
            title: 'Opal (Testnet)',
            abbreviation: 'OPL',
            icon: { name: 'chain-opal', size: 16 }
        }
    ],
    rates: [
        { id: 'id3', abbreviation: 'KSM', rate: '9898988989.0089' },
        { id: 'id4', abbreviation: 'KSM', rate: '0.008' }
    ],
    accounts: [
        { id: 'id6', account: 'hrumhrum1aaaaaaaaaaaa', address: '5D1esf2FG' },
        { id: 'id7', account: 'hrumhrum2', address: '6D1esf2FG' },
        { id: 'id8', account: 'hrumhrum3', address: '7D1esf2FG' }
    ]
};
