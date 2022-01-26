import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components';
import avatar from '../assets/static/avatar.jpg';

export default {
    title: 'Components/Avatar',
    component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Square = Template.bind({});

Square.args = {
    src: avatar,
    size: 38,
    type: 'square'
};

Square.storyName = 'Square 38px';

export const Circle = Template.bind({});

Circle.args = {
    src: avatar,
    size: 64,
    type: 'circle'
};

Circle.storyName = 'Circle 64px';
