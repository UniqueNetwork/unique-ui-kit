import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from '../components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    size: 's'
};

Default.storyName = 'Default';

export const Size = Template.bind({});

Size.args = {
    label: 'Label',
    size: 'm'
};

Size.storyName = 'Default w/ size';

export const Checked = Template.bind({});

Checked.args = {
    label: 'Label',
    size: 's',
    checked: true
};

Checked.storyName = 'Default w/ checked';

export const Disable = Template.bind({});

Disable.args = {
    label: 'Label',
    size: 's',
    checked: true,
    disabled: true
};

Disable.storyName = 'Default w/ disable';
