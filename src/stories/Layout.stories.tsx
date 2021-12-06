import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from '../components';

export default {
    title: 'Components/Layout',
    component: Layout
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
    <Layout {...args}>
        <div>layout children</div>
    </Layout>
);

export const Default = Template.bind({});

Default.args = {
    header: 'header',
    footer: 'footer'
};

Default.storyName = 'Default';
