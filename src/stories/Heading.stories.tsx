import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../components';

export default {
    title: 'Components/Heading',
    component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args}>Heading</Heading>
);

export const Default = Template.bind({});

Default.args = {
    size: '1'
};

Default.storyName = 'Default';

export const Primary = Template.bind({});

Primary.args = {
    size: '2'
};

Primary.storyName = 'heading-2';

export const BlueGrey = Template.bind({});
