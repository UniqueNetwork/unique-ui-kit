import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputText } from '../components';

export default {
    title: 'InputText',
    component: InputText
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
    <InputText {...args} />
);

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder'
};

Default.storyName = 'Default';

export const Status = Template.bind({});

Status.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    statusText: 'Status text'
};

Status.storyName = 'Default w/ status';

export const Error = Template.bind({});

Error.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    statusText: 'Error message',
    error: true
};

Error.storyName = 'Default w/ error';

export const Minimal = Template.bind({});

Minimal.args = {
    placeholder: 'Placeholder'
};

export const Label = Template.bind({});

Label.args = {
    label: 'Label',
    placeholder: 'Placeholder'
};

Label.storyName = 'Minimal w/ label';

export const Icon = Template.bind({});

Icon.args = {
    placeholder: 'Placeholder',
    className: 'with-icon icon-pencil'
};

Icon.storyName = 'Minimal w/ icon';

export const Disabled = Template.bind({});

Disabled.args = {
    value: 'Value',
    disabled: true
};

Disabled.storyName = 'Minimal disabled';
