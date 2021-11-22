import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components';

export default {
    title: 'Components/Select',
    component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState(undefined);
    return (
        <Select
            {...args}
            value={value}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onChange={(value: any) => {
                console.log('onChange', value);
                setValue(value);
            }}
        />
    );
};

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options
};

Default.storyName = 'Default';

export const Status = Template.bind({});

Status.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options,
    statusText: 'Status text'
};

Status.storyName = 'Default w/ status';

export const Error = Template.bind({});

Error.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options,
    statusText: 'Error message',
    error: true
};

Error.storyName = 'Default w/ error';

export const Minimal = Template.bind({});

Minimal.args = {
    placeholder: 'Placeholder',
    options
};

Minimal.storyName = 'Minimal';

export const Label = Template.bind({});

Label.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    options
};

Label.storyName = 'Minimal w/ label';

export const Value = Template.bind({});

Value.args = {
    placeholder: 'Placeholder',
    defaultValue: 'Option 2',
    options
};

Value.storyName = 'Minimal w/ value';

export const Disabled = Template.bind({});

Disabled.args = {
    placeholder: 'Placeholder',
    defaultValue: 'Option 4',
    options,
    disabled: true
};

Disabled.storyName = 'Minimal disabled';
