import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Breadcrumbs } from '../components';

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => {
    return <Breadcrumbs {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    options: ['home', 'dipper', 'dipper']
};

Default.storyName = 'Default';
