import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from '../components';

export default {
    title: 'Components/Radio',
    component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <Radio {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    size: 's'
};

Default.storyName = 'Default';

export const Size = Template.bind({});

Size.args = {
    label: 'Label'
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