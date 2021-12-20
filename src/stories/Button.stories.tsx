import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components';

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Button',
    role: 'primary'
};

Primary.storyName = 'Primary /w size L';

export const PrimaryIconRight = Template.bind({});

PrimaryIconRight.args = {
    title: 'Button',
    role: 'primary',
    iconRight: { name: 'arrow-right', size: 12, color: '#fff' }
};

PrimaryIconRight.storyName = 'Primary w/ icon to right';

export const Secondary = Template.bind({});

Secondary.args = {
    title: 'Button',
    role: 'secondary',
    size: 's'
};

Secondary.storyName = 'Secondary w/ size S';

export const SecondaryIconLeft = Template.bind({});

SecondaryIconLeft.args = {
    title: 'Button',
    role: 'secondary',
    size: 's',
    iconLeft: { name: 'arrow-left', size: 12, color: '#fff' }
};

SecondaryIconLeft.storyName = 'Secondary w/ icon to left';

export const Tertiary = Template.bind({});

Tertiary.args = {
    title: 'Button',
    role: 'tertiary',
    size: 'm'
};

Tertiary.storyName = 'Tertiary w/ size M';

export const TertiaryWide = Template.bind({});

TertiaryWide.args = {
    title: 'Button',
    role: 'tertiary',
    wide: true
};

TertiaryWide.storyName = 'Tertiary w/ wide';

export const Outlined = Template.bind({});

Outlined.args = {
    title: 'Button'
};

Outlined.storyName = 'Outlined w/ size L';

export const OutlinedDisabled = Template.bind({});

OutlinedDisabled.args = {
    title: 'Button',
    disabled: true
};

OutlinedDisabled.storyName = 'Outlined w/ disabled';

export const Danger = Template.bind({});

Danger.args = {
    title: 'Button',
    role: 'danger',
    size: 's'
};

Danger.storyName = 'Danger w/ size S';
