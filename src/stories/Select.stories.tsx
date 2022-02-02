import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components';
import opal from '../assets/static/opal.svg';
import quartz from '../assets/static/quartz.svg';

export default {
    title: 'Components/Select',
    component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState(undefined);
    return (
        <Select
            {...args}
            value={value}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onChange={(value: any) => {
                console.log('onChange', value);
                setValue(value);
            }}
        />
    );
};

const options = [
    { id: 'id1', title: 'Option 1' },
    { id: 'id2', title: 'Option 2' },
    { id: 'id3', title: 'Option 3' },
    { id: 'id4', title: 'Option 4' },
    { id: 'id5', title: 'Option 5' }
];

const optionsLibraryIcons = [
    {
        id: 'id1',
        title: 'Title',
        iconLeft: { name: 'arrow-down', size: 12, color: '#81858E' }
    },
    {
        id: 'id2',
        title: 'Title',
        iconLeft: { name: 'arrow-up', size: 12, color: '#81858E' }
    },
    {
        id: 'id3',
        title: 'Author',
        iconRight: { name: 'arrow-down', size: 12, color: '#81858E' }
    },
    {
        id: 'id4',
        title: 'Author',
        iconRight: { name: 'arrow-up', size: 12, color: '#81858E' }
    }
];

const optionsLibraryChains = [
    {
        id: 'id1',
        title: 'QTZ',
        iconRight: { name: 'chain-quartz', size: 16 }
    },
    {
        id: 'id2',
        title: 'OPL',
        iconRight: { name: 'chain-opal', size: 16 }
    }
];

const optionsStaticChains = [
    {
        id: 'id1',
        title: 'QTZ',
        iconRight: { file: quartz, size: 16 }
    },
    {
        id: 'id2',
        title: 'OPL',
        iconRight: { file: opal, size: 16 }
    }
];

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options
};

Default.storyName = 'Default';

export const Status = Template.bind({});

Status.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options,
    statusText: 'Status text'
};

Status.storyName = 'Default w/ status';

export const Error = Template.bind({});

Error.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options,
    statusText: 'Error message',
    error: true
};

Error.storyName = 'Default w/ error';

export const Minimal = Template.bind({});

Minimal.args = {
    placeholder: 'Placeholder',
    options
};

Minimal.storyName = 'Minimal';

export const Label = Template.bind({});

Label.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    options
};

Label.storyName = 'Minimal w/ label';

export const Value = Template.bind({});

Value.args = {
    placeholder: 'Placeholder',
    defaultValue: 'id2',
    options
};

Value.storyName = 'Minimal w/ value';

export const Disabled = Template.bind({});

Disabled.args = {
    placeholder: 'Placeholder',
    defaultValue: 'Option 4',
    options,
    disabled: true
};

Disabled.storyName = 'Minimal disabled';

export const MinimaLibraryIcons = Template.bind({});

MinimaLibraryIcons.args = {
    placeholder: 'Placeholder',
    options: optionsLibraryIcons
};

MinimaLibraryIcons.storyName = 'Minimal w/ library icons';

export const MinimaLibraryChains = Template.bind({});

MinimaLibraryChains.args = {
    placeholder: 'Placeholder',
    options: optionsLibraryChains
};

MinimaLibraryChains.storyName = 'Minimal w/ library chains';

export const MinimalStaticChains = Template.bind({});

MinimalStaticChains.args = {
    placeholder: 'Placeholder',
    options: optionsStaticChains
};

MinimalStaticChains.storyName = 'Minimal w/ static chains';
