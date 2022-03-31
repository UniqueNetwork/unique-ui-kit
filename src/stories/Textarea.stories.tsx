import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from '../components';

export default {
    title: 'Components/Textarea',
    component: Textarea
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
    <Textarea {...args} />
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

export const Small = Template.bind({});

Small.args = {
    placeholder: 'Placeholder',
    size: 'small'
};

Small.storyName = 'Minimal w/ size Small';

export const IconRight = Template.bind({});

IconRight.args = {
    placeholder: 'Placeholder',
    iconRight: { name: 'pencil', size: 18, color: 'var(--color-blue-grey-500)' }
};

IconRight.storyName = 'Minimal w/ icon to right';

export const IconLeft = Template.bind({});

IconLeft.args = {
    placeholder: 'Placeholder',
    iconLeft: { name: 'magnify', size: 18, color: 'var(--color-blue-grey-500)' }
};

IconLeft.storyName = 'Minimal w/ icon to left';

export const Disabled = Template.bind({});

Disabled.args = {
    value: 'Value',
    disabled: true
};

Disabled.storyName = 'Minimal disabled';

export const Rows = Template.bind({});

Rows.args = {
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    rows: 10
};

Rows.storyName = 'Rows';
