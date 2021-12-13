import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Radios } from '../components';

export default {
    title: 'Components/Radios',
    component: Radios
} as ComponentMeta<typeof Radios>;

const Template: ComponentStory<typeof Radios> = (args) => {
    const [selectedValue, setSelectedValue] = useState(args.options[0].value);
    return (
        <Radios
            options={args.options}
            selected={selectedValue}
            onChange={setSelectedValue}
            size={args.size}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    options: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Panama' }]
};

Default.storyName = 'Default';

export const DefaultSize = Template.bind({});

DefaultSize.args = {
    options: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Panama' }],
    size: 's'
};

DefaultSize.storyName = 'Default w/ size';

export const DefaultDisabled = Template.bind({});

DefaultDisabled.args = {
    options: [
        { value: 'Apple' },
        { value: 'Banana', disabled: true },
        { value: 'Panama' }
    ]
};

DefaultDisabled.storyName = 'Default w/ disabled';
