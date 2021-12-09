import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toggle } from '../components';

export default {
    title: 'Components/Toggle',
    component: Toggle
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
    const [on, setOn] = useState(args.on);
    return <Toggle {...args} on={on} onChange={setOn} />;
};

export const Default = Template.bind({});

Default.args = {
    label: 'Label'
};

Default.storyName = 'Default';

export const On = Template.bind({});

On.args = {
    label: 'Label',
    on: true
};

On.storyName = 'Default w/ turn on';

export const Disable = Template.bind({});

Disable.args = {
    label: 'Label',
    on: true,
    disabled: true
};

Disable.storyName = 'Default w/ disable';
