import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../components';

export default {
    title: 'Components/Heading',
    component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args}>
        children
    </Heading>
);

export const Default = Template.bind({});

Default.args = {
    size: 1,
    color: 'dark',
};

Default.storyName = 'Default';

export const Primary = Template.bind({});

Primary.args = {
    size: 2,
    color: 'primary',
};

Primary.storyName = 'body m-color primary';

export const BlueGrey = Template.bind({});

BlueGrey.args = {
    size: 3,
    color: 'blue-grey',
};

BlueGrey.storyName = 'body m-weight medium-color blue-grey';
