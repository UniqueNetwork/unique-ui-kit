import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AccountName } from '../components';

export default {
    title: 'Widgets/AccountName',
    component: AccountName
} as ComponentMeta<typeof AccountName>;

const Template: ComponentStory<typeof AccountName> = (args) => (
    <AccountName {...args} />
);

export const Default = Template.bind({});

Default.args = {
    name: 'Di21ZbwsSjzMFMPrsNY2yHYoMU6BomYSxsd7L1AKGwaGoX3'
};

Default.storyName = 'Default';
