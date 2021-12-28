import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from '../components';
import { useState } from 'react';

export default {
    title: 'Components/Search',
    component: Search
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => {
    const [value, setValue] = useState(args.value);
    const onChange = (val: string) => {
        setValue(val);
    };

    const onSearch = (val: string) => {
        console.log('searching', val);
    };

    return (
        <Search
            {...args}
            value={value}
            onChange={(val: string) => onChange(val)}
            onSearch={(val: string) => onSearch(val)}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    value: '',
    placeholder: 'Placeholder',
    iconLeft: { name: 'magnify', size: 18, color: '#C4C6CA' }
};

Default.storyName = 'Default';

export const WithButton = Template.bind({});

WithButton.args = {
    value: '',
    placeholder: 'Extrinsic / collection / token / account',
    iconLeft: { name: 'magnify', size: 18, color: '#C4C6CA' },
    withButton: true
};

WithButton.storyName = 'WithButton';
