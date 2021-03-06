import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../components';

export default {
    title: 'Components/Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>;

const TemplatePages: ComponentStory<typeof Pagination> = (args) => {
    return <Pagination {...args} />;
};

export const Default = TemplatePages.bind({});

Default.args = {
    size: 100,
    withIcons: true,
    onPageChange: (index: number) => console.log('onPageChange', index + 1)
};

Default.storyName = 'Default';

export const DefaultMobile = TemplatePages.bind({});

DefaultMobile.args = {
    visible: 2,
    size: 45,
    withIcons: true
};

DefaultMobile.storyName = 'Default mobile';

export const DefaultPage = TemplatePages.bind({});

DefaultPage.args = {
    size: 100,
    withPageSelector: true,
    withIcons: true
};

DefaultPage.storyName = 'Default w/ pageSelector';

export const DefaultPerPageSelector = TemplatePages.bind({});

DefaultPerPageSelector.args = {
    size: 100,
    withPerPageSelector: true,
    withIcons: true
};

DefaultPerPageSelector.storyName = 'Default w/ perPageSelector';

export const Complete = TemplatePages.bind({});

Complete.args = {
    size: 100,
    withPageSelector: true,
    withPerPageSelector: true,
    pageSizes: [30, 50, 90],
    withIcons: true,
    onPageChange: (index: number) => console.log('onPageChange', index + 1),
    onPageSizeChange: (size: number) => {
        console.log('onPageSizeChange', size);
    },
    onGoToPage: (page: number) => {
        console.log('onGoToPage', page);
    }
};

Complete.storyName = 'Complete w/ pageSizes';

export const DefaultSize = TemplatePages.bind({});

DefaultSize.args = {
    size: 99999,
    withIcons: true
};

DefaultSize.storyName = 'Default w/ size';

export const DefaultVisible = TemplatePages.bind({});

DefaultVisible.args = {
    size: 100,
    visible: 3,
    withIcons: true
};

DefaultVisible.storyName = 'Default w/ visible';

export const DefaultCurrent = TemplatePages.bind({});

DefaultCurrent.args = {
    size: 100,
    current: 4,
    withIcons: true
};

DefaultCurrent.storyName = 'Default w/ current';

export const DefaultPerPage = TemplatePages.bind({});

DefaultPerPage.args = {
    size: 120,
    perPage: 20,
    withIcons: true
};

DefaultPerPage.storyName = 'Default w/ perPage';
