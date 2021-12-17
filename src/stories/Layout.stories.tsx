import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from '../components';

export default {
    title: 'Layout/Block explorer',
    component: Layout,
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
    <Layout {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </Layout>
);

export const DefaultMinimal = Template.bind({});

DefaultMinimal.args = {};

DefaultMinimal.storyName = 'Default minimal';

export const DefaultHeading = Template.bind({});

DefaultHeading.args = {
    heading: 'Layout title'
};

DefaultHeading.storyName = 'Default w/ heading';

export const DefaultBreadcrumbs = Template.bind({});

DefaultBreadcrumbs.args = {
    breadcrumbs: {
        options: [
            { title: 'Home', link: '#' },
            { title: 'Section', link: '#' },
            { title: 'Current', link: '#' }
        ]
    }
};

DefaultBreadcrumbs.storyName = 'Default w/ breadcrumbs';

export const DefaultFull = Template.bind({});

DefaultFull.args = {
    heading: 'Layout title',
    breadcrumbs: {
        options: [
            { title: 'Home', link: '#' },
            { title: 'Section', link: '#' },
            { title: 'Current', link: '#' }
        ]
    }
};

DefaultFull.storyName = 'Default complete';
