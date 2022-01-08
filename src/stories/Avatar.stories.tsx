import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components';

export default {
    title: 'Components/Avatar',
    component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
    path: 'arrow-right'
};

Default.storyName = 'Default';