import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components';

export default {
    title: 'Components/Text',
    component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <Text {...args}>
        children
    </Text>
);

export const Default = Template.bind({});

Default.args = {
    size: 'xs',
    weight: 'medium'
};

Default.storyName = 'Default';
