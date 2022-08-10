import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputTag } from '../components';

export default {
    title: 'Components/InputTag',
    component: InputTag,
} as ComponentMeta<typeof InputTag>;

const Template: ComponentStory<typeof InputTag> = (args) => (
    <InputTag {...args} />
);

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
};

Default.storyName = 'Default';

export const Status = Template.bind({});

Status.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    statusText: 'Status text',
};

Status.storyName = 'Default w/ status';

export const Error = Template.bind({});

Error.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    statusText: 'Error message',
    error: true,
};

Error.storyName = 'Default w/ error';

export const Minimal = Template.bind({});

Minimal.args = {
    placeholder: 'Placeholder',
};

export const Label = Template.bind({});

Label.args = {
    label: 'Label',
    placeholder: 'Placeholder',
};

Label.storyName = 'Minimal w/ label';

export const Small = Template.bind({});

Small.args = {
    placeholder: 'Placeholder',
    size: 'small',
};

Small.storyName = 'Minimal w/ size Small';

export const Disabled = Template.bind({});

Disabled.args = {
    placeholder: 'Placeholder',
    size: 'small',
    disabled: true,
    value: ['test'],
};

Disabled.storyName = 'Disabled';
