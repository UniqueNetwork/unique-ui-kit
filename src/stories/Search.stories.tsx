import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from '../components';
import { useState, KeyboardEvent } from 'react';

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
        console.log('onSearch', val);
    };

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log('onKeyDown', event);
    };

    return (
        <div style={{ maxWidth: '620px' }}>
            <Search
                {...args}
                value={value}
                onChange={(val: string) => onChange(val)}
                onSearch={(val: string) => onSearch(val)}
                onKeyDown={(event: KeyboardEvent<HTMLInputElement>) =>
                    onKeyDown(event)
                }
            />
        </div>
    );
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
    value: 'value',
    placeholder: 'Placeholder'
};

export const WithButton = Template.bind({});
WithButton.storyName = 'WithButton';
WithButton.args = {
    value: '',
    placeholder: 'Extrinsic / collection / token / account',
    withButton: true
};

export const noIconClose = Template.bind({});
noIconClose.storyName = 'NoIconClose';
noIconClose.args = {
    value: '',
    placeholder: 'placeholder',
    withButton: true,
    clearBtn: false
};
