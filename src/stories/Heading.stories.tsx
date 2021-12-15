import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../components';

export default {
    title: 'Components/Heading',
    component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args}>Heading</Heading>
);

export const Default = Template.bind({});

Default.args = {
    size: '1'
};

Default.storyName = 'Default';

export const Heading2 = Template.bind({});

Heading2.args = {
    size: '2'
};

Heading2.storyName = 'Heading-2';

export const Heading3 = Template.bind({});

Heading3.args = {
    size: '3'
};

Heading3.storyName = 'Heading-3';

export const Heading4 = Template.bind({});

Heading4.args = {
    size: '4'
};

Heading4.storyName = 'Heading-4';

