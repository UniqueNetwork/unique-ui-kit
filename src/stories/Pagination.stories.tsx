import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../components';

export default {
    title: 'Components/Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = ({
    pageCount,
    currentPage,
    disabled,
    showPrevButton,
    showNextButton,
    siblingCount,
    className
}) => {
    const [activePage, setCurrentPage] = useState(currentPage);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Pagination
            className={className}
            pageCount={pageCount}
            currentPage={activePage}
            disabled={disabled}
            showPrevButton={showPrevButton}
            showNextButton={showNextButton}
            siblingCount={siblingCount}
            onChange={onPageChange}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    pageCount: 10,
    currentPage: 1,
    siblingCount: 0
};

Default.storyName = 'Default';

export const Short = Template.bind({});

Short.args = {
    pageCount: 3,
    currentPage: 2,
    siblingCount: 0
};

Short.storyName = 'Short w/ buttons';

export const Long = Template.bind({});

Long.args = {
    pageCount: 3456,
    currentPage: 1,
    siblingCount: 1,
    showPrevButton: false
};

Long.storyName = 'Long from begin w/ nextButton';

export const Disabled = Template.bind({});

Disabled.args = {
    pageCount: 34567,
    currentPage: 1,
    siblingCount: 1,
    showPrevButton: false,
    disabled: true
};

Disabled.storyName = 'Disabled';