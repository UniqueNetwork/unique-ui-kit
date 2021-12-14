import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components';

export default {
    title: 'Components/Text',
    component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <Text {...args}>
        ghj children
    </Text>
);

export const Default = Template.bind({});

Default.args = {
    size: 'xs',
    weight: 'medium',
    color: 'dark',
};

Default.storyName = 'Default';

export const Primary = Template.bind({});

Primary.args = {
    size: 'm',
    color: 'primary',
};

Primary.storyName = 'body m-color primary';

export const BlueGrey = Template.bind({});

BlueGrey.args = {
    size: 'm',
    weight: 'medium',
    color: 'blue-grey',
};

BlueGrey.storyName = 'body m-weight medium-color blue-grey';
