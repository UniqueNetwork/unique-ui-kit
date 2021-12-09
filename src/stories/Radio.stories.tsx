import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Radio } from '../components';

export default {
    title: 'Components/Radio',
    component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio.Group> = (args) => {
    const [value, setValue] = useState(args.options[0].value);
    return (
        <Radio.Group
            options={args.options}
            size={args.size}
            value={value}
            onChange={setValue}
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
        { value: 'Apple', disabled: true },
        { value: 'Banana' },
        { value: 'Panama' }
    ]
};

DefaultDisabled.storyName = 'Default w/ disabled';
