import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, InputText } from '../components';

export default {
    title: 'Components/InputText',
    component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
    <InputText {...args} />
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

export const IconRight = Template.bind({});

IconRight.args = {
    placeholder: 'Placeholder',
    iconRight: {
        name: 'pencil',
        size: 18,
        color: 'var(--color-blue-grey-500)',
    },
};

IconRight.storyName = 'Minimal w/ icon to right';

export const IconLeft = Template.bind({});

IconLeft.args = {
    placeholder: 'Placeholder',
    iconLeft: {
        name: 'magnify',
        size: 18,
        color: 'var(--color-blue-grey-500)',
    },
};

IconLeft.storyName = 'Minimal w/ icon to left';

export const IconLeftAndRight = Template.bind({});

IconLeftAndRight.args = {
    placeholder: 'Placeholder',
    iconLeft: {
        name: 'magnify',
        size: 18,
        color: 'var(--color-blue-grey-500)',
    },
    iconRight: {
        name: 'pencil',
        size: 18,
        color: 'var(--color-blue-grey-500)',
    },
};

IconLeftAndRight.storyName = 'Minimal w/ both icons';

export const Disabled = Template.bind({});

Disabled.args = {
    value: 'Value',
    disabled: true,
};

Disabled.storyName = 'Minimal disabled';

export const DoubleIcon = Template.bind({});

DoubleIcon.args = {
    value: 'Value',
    iconRight: (
        <>
            <Icon size={18} name={'pencil'} />
            <Icon size={18} name={'magnify'} />
        </>
    ),
};

DoubleIcon.storyName = 'Double icon';
