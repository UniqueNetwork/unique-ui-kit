import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatar from '../assets/images/avatar.jpg';
import { Avatar } from '../components';

export default {
    title: 'Components/Avatar',
    component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
    src: avatar,
    size: 38,
    type: 'square'
};

Default.storyName = 'Default';

export const Circle = Template.bind({});

Circle.args = {
    src: avatar,
    size: 64,
    type: 'circle'
};

Circle.storyName = 'Circle';
