import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components';

export default {
    title: 'Components/Text',
    component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <Text {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </Text>
);

export const Default = Template.bind({});

Default.args = {};

Default.storyName = 'Default';

export const PrimaryL = Template.bind({});

PrimaryL.args = {
    size: 'l',
    color: 'primary-500',
};

PrimaryL.storyName = 'Primary regular L';

export const BlueGreyS = Template.bind({});

BlueGreyS.args = {
    size: 's',
    color: 'grey-500',
    weight: 'medium'
};

BlueGreyS.storyName = 'Grey medium S';
