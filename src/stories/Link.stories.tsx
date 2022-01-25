import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from '../components';

export default {
    title: 'Components/Link',
    component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Primary link'
};

Primary.storyName = 'Primary';

export const Secondary = Template.bind({});

Secondary.args = {
    title: 'Secondary link',
    role: 'secondary'
};

Secondary.storyName = 'Secondary';

export const Danger = Template.bind({});

Danger.args = {
    title: 'Danger link',
    role: 'danger'
};

Danger.storyName = 'Danger';
