import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components';
import arrowLeft from '../assets/svg/arrow_left.svg';
import arrowRight from '../assets/svg/arrow_right.svg';
import { param } from './button.args';

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const getButton = (args:any) => <Button {...args} />;

const Template1: ComponentStory<typeof Button> = (args) => (
    
    <table>
        <caption><strong>HeightSize/WidthSize</strong></caption>
         <tr><th>s/s</th><th>s/m</th><th>m/s</th><th>m/m</th><th style={{'minWidth':200}}>m/full</th></tr>
        <tr><td>{getButton(param[11])}</td><td>{getButton(param[12])}</td><td>{getButton(param[13])}</td><td>{getButton(param[14])}</td><td>{getButton(param[15])}</td></tr>
        <tr><td>{getButton(param[21])}</td><td>{getButton(param[22])}</td><td>{getButton(param[23])}</td><td>{getButton(param[24])}</td><td>{getButton(param[25])}</td></tr>
        <tr><td>{getButton(param[31])}</td><td>{getButton(param[32])}</td><td>{getButton(param[33])}</td><td>{getButton(param[34])}</td><td>{getButton(param[35])}</td></tr>
        <tr><td>{getButton(param[41])}</td><td>{getButton(param[42])}</td><td>{getButton(param[43])}</td><td>{getButton(param[44])}</td><td>{getButton(param[45])}</td></tr>
        <tr><td>{getButton(param[51])}</td><td>{getButton(param[52])}</td><td>{getButton(param[53])}</td><td>{getButton(param[54])}</td><td>{getButton(param[55])}</td></tr>
        <tr><td>{getButton(param[61])}</td><td>{getButton(param[62])}</td><td>{getButton(param[63])}</td><td>{getButton(param[64])}</td><td>{getButton(param[65])}</td></tr>
        <tr><td>{getButton(param[71])}</td><td>{getButton(param[72])}</td><td>{getButton(param[73])}</td><td>{getButton(param[74])}</td><td>{getButton(param[75])}</td></tr>
        <tr><td>{getButton(param[81])}</td><td>{getButton(param[82])}</td><td>{getButton(param[83])}</td><td>{getButton(param[84])}</td><td>{getButton(param[85])}</td></tr>
    </table>
);

export const Default = Template1;
Default.storyName = 'AllButtons';

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}/>
);

export const Primary = Template.bind({});

Primary.args = {
    children: 'Button',
    view: 'primary',
    heightSize: 's',
    widthSize: 's',
    leftIcon: arrowLeft,
    rightIcon: arrowRight,
    disabled: false
}

Primary.storyName = 'Primary';

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Button',
    view: 'secondary',
    heightSize: 's',
    widthSize: 's',
    leftIcon: '',
    rightIcon: arrowRight,
    disabled: false
};

Secondary.storyName = 'Secondary';

export const Tertiary = Template.bind({});

Tertiary.args = {
    children: 'Button',
    view: 'tertiary',
    heightSize: 's',
    widthSize: 's',
    leftIcon: '',
    rightIcon: '',
    disabled: false
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
    disabled: false
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
    disabled: false
};

Danger.storyName = 'Danger';
