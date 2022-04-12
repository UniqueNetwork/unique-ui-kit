import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, Icon } from '../components';
import { useState } from 'react';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ children, ...args }) => (
    <Accordion {...args}>{children}</Accordion>
);

export const Default = Template.bind({});

Default.args = {
    title: 'Accordion Title',
    children: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
    ),
};

Default.storyName = 'Default';

export const DefaultOpen = Template.bind({});

DefaultOpen.args = {
    title: 'Accordion Title',
    expanded: true,
    children: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
    ),
};

DefaultOpen.storyName = 'Open Accordion';

export const CustomIcon = Template.bind({});

CustomIcon.args = {
    title: 'Accordion Title',
    expanded: true,
    expendIcon: (
        <Icon size={16} name={'close'} color={'var(--color-secondary-400)'} />
    ),
    children: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
    ),
};

CustomIcon.storyName = 'Custom Icon';
