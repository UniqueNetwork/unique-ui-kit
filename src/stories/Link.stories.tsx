import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, Link } from '../components';

export default {
    title: 'Components/Link',
    component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Primary link',
};

Primary.storyName = 'Primary';

export const Secondary = Template.bind({});

Secondary.args = {
    title: 'Secondary link',
    role: 'secondary',
};

Secondary.storyName = 'Secondary';

export const Danger = Template.bind({});

Danger.args = {
    title: 'Danger link',
    role: 'danger',
};

Danger.storyName = 'Danger';

export const Disabled = Template.bind({});

Disabled.args = {
    title: 'Disabled link',
    role: 'disabled',
};

Disabled.storyName = 'Disabled';

const TemplateNode: ComponentStory<typeof Link> = (args) => (
    <Link>
        External link
        <Icon
            size={18}
            color="var(--color-primary-500)"
            name="arrow-up-right"
        />
    </Link>
);

export const PrimaryNode = TemplateNode.bind({});

PrimaryNode.args = {};

PrimaryNode.storyName = 'Primary w/ children';
