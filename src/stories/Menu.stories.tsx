import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Menu } from '../widgets';

export default {
    title: 'Widgets/Menu',
    component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
    const [token, setToken] = useState(undefined);
    const [rate, setRate] = useState(undefined);
    return (
        <Menu
            {...args}
            value={token}
            token={token}
            rate={rate}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onChangeToken={(value: any) => {
                console.log('onChange', value);
                setToken(value);
                setRate(value);
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
        { id: 'id3', abbreviation: 'QTZ', rate: '9898988989.0089' },
        { id: 'id4', abbreviation: 'KSM', rate: '34348.8553' },
        { id: 'id5', abbreviation: 'KSM', rate: '9898988989.0089' }
    ]
};
