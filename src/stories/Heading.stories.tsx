import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../components';

export default {
    title: 'Components/Heading',
    component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args}>Heading</Heading>
);

export const DefaultH1 = Template.bind({});

DefaultH1.args = {};

DefaultH1.storyName = 'Default H1';

export const DefaultH2 = Template.bind({});

DefaultH2.args = {
    size: '2'
};

DefaultH2.storyName = 'Default H2';

export const DefaultH3 = Template.bind({});

DefaultH3.args = {
    size: '3'
};

DefaultH3.storyName = 'Default H3';

export const DefaultH4 = Template.bind({});

DefaultH4.args = {
    size: '4'
};

DefaultH4.storyName = 'Default H4';
