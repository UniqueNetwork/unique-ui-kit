import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from '../components/Loader/Loader';

export default {
    title: 'Components/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {};

Default.storyName = 'Default';

export const DefaultLabel = Template.bind({});

DefaultLabel.args = {
    label: 'Loading...',
};

DefaultLabel.storyName = 'Default w/ label';

export const DefaultWithSize = Template.bind({});

DefaultWithSize.args = {
    size: 'middle',
};

DefaultWithSize.storyName = 'Default w/ size middle';

export const DefaultWithPlacement = Template.bind({});

DefaultWithPlacement.args = {
    placement: 'bottom',
    label: 'Operation is in progress',
};

DefaultWithPlacement.storyName = 'Default w/ placement';

const FullPage: ComponentStory<typeof Loader> = (args) => (
    <div style={{ fontFamily: 'var(--prop-font-family)' }}>
      
        <Loader {...args} />
    </div>
);

export const DefaultWithFullPage = FullPage.bind({});

DefaultWithFullPage.args = {
    isFullPage: true,
};

DefaultWithFullPage.storyName = 'Default w/ full page';
