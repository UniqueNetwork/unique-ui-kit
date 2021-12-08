import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components';
import arrowLeft from '../assets/svg/arrow_left.svg';
import arrowRight from '../assets/svg/arrow_right.svg';

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Button',
    view: 'primary',
    heightSize: 's',
    widthSize: 's',
    leftIcon: '',
    rightIcon: '',
    disabled: false,
    wide: false
};

Primary.storyName = 'Primary';

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Button',
    view: 'secondary',
    heightSize: 's',
    widthSize: 's',
    leftIcon: '',
    rightIcon: arrowRight,
    disabled: false,
    wide: false
};

Secondary.storyName = 'Secondary';

export const Tertiary = Template.bind({});

Tertiary.args = {
    children: 'Button',
    view: 'tertiary',
    heightSize: 's',
    widthSize: 's',
    leftIcon: arrowLeft,
    rightIcon: '',
    disabled: false,
    wide: false
};

Tertiary.storyName = 'Tertiary';

export const Outlined = Template.bind({});

Outlined.args = {
    children: 'Button',
    view: 'outlined',
    heightSize: 's',
    widthSize: 's',
    leftIcon: '',
    rightIcon: '',
    disabled: false,
    wide: false
};

Outlined.storyName = 'Outlined';

export const Danger = Template.bind({});

Danger.args = {
    children: 'Button',
    view: 'danger',
    heightSize: 's',
    widthSize: 's',
    leftIcon: '',
    rightIcon: '',
    disabled: false,
    wide: true
};

Danger.storyName = 'Danger';
