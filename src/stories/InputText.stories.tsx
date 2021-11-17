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
    placeholder: 'Placeholder'
};

export const Disabled = Template.bind({});

Disabled.args = {
    value: 'Value',
    disabled: true
};

export const Icon = Template.bind({});

Icon.args = {
    placeholder: 'Placeholder',
    className: 'with-icon icon-edit'
};

Icon.storyName = 'With icon';

export const Label = Template.bind({});

Label.args = {
    label: 'Label',
    placeholder: 'Placeholder'
};

export const Additional = Template.bind({});

Additional.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder'
};

Additional.storyName = 'Additional text';

export const Status = Template.bind({});

Status.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    statusText: 'Status text'
};

Status.storyName = 'Status text';

export const Error = Template.bind({});

Error.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    statusText: 'Error message',
    error: true
};

Error.storyName = 'Error message';
