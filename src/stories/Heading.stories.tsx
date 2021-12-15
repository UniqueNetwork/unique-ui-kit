import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../components';

export default {
    title: 'Components/Heading',
    component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args}>Heading</Heading>
);

export const H1Header = Template.bind({});

H1Header.args = {};

H1Header.storyName = 'H1 to header';

export const H1Body = Template.bind({});

H1Body.args = {
    wrapper: 'body'
};

H1Body.storyName = 'H1 to body';

export const H2 = Template.bind({});

H2.args = {
    size: '2',
    wrapper: 'body'
};

H2.storyName = 'H2 to body';

export const H3 = Template.bind({});

H3.args = {
    size: '3',
    wrapper: 'body'
};

H3.storyName = 'H3 to body';

export const H4 = Template.bind({});

H4.args = {
    size: '4',
    wrapper: 'body'
};

H4.storyName = 'H4 to body';
