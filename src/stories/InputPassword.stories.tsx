import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Icon, InputPassword } from '../components';

export default {
    title: 'Components/InputPassword',
    component: InputPassword,
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = ({ value, ...args }) => {
    const [password, setPassword] = useState(value || '');
    return <InputPassword {...args} value={password} onChange={setPassword} />;
};

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
};

Default.storyName = 'Default';

export const MinimalDisabled = Template.bind({});

MinimalDisabled.args = {
    placeholder: 'Placeholder',
    disabled: true,
};

MinimalDisabled.storyName = 'Minimal disabled';

export const MinimalError = Template.bind({});

MinimalError.args = {
    placeholder: 'Placeholder',
    statusText: 'Error message',
    value: 'password',
    error: true,
};

MinimalError.storyName = 'Minimal w/ error';
