import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components';
import opal from '../assets/static/opal.svg';
import quartz from '../assets/static/quartz.svg';
import { SelectOptionProps } from '../types';

export default {
    title: 'Components/Select',
    component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState();
    return (
        <Select
            {...args}
            value={value}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onChange={(option: SelectOptionProps) => {
                console.log('onChange', option);
                setValue(option[args.optionKey || 'id']);
            }}
        />
    );
};

const optionsDefault = [
    { id: 'id1', title: 'Option 1' },
    { id: 'id2', title: 'Option 2' },
    { id: 'id3', title: 'Option 3' },
    { id: 'id4', title: 'Option 4' },
    { id: 'id5', title: 'Option 5' },
];

const optionsKeyValue = [
    { identity: 'id1', message: 'Option 1' },
    { identity: 'id2', message: 'Option 2' },
    { identity: 'id3', message: 'Option 3' },
    { identity: 'id4', message: 'Option 4' },
    { identity: 'id5', message: 'Option 5' },
];

const optionsValue = [
    { message: 'Option 1' },
    { message: 'Option 2' },
    { message: 'Option 3' },
    { message: 'Option 4' },
    { message: 'Option 5' },
];

const optionsLibraryIcons = [
    {
        id: 'identity',
        text: 'message',
        title: 'Title',
        iconLeft: {
            name: 'arrow-down',
            size: 12,
            color: 'var(--color-grey-500)',
        },
    },
    {
        id: 'id2',
        title: 'Title',
        iconLeft: {
            name: 'arrow-up',
            size: 12,
            color: 'var(--color-grey-500)',
        },
    },
    {
        id: 'id3',
        title: 'Author',
        iconRight: {
            name: 'arrow-down',
            size: 12,
            color: 'var(--color-grey-500)',
        },
    },
    {
        id: 'id4',
        title: 'Author',
        iconRight: {
            name: 'arrow-up',
            size: 12,
            color: 'var(--color-grey-500)',
        },
    },
];

const optionsLibraryChains = [
    {
        id: 'id1',
        title: 'QTZ',
        iconRight: { name: 'chain-quartz', size: 16 },
    },
    {
        id: 'id2',
        title: 'OPL',
        iconRight: { name: 'chain-opal', size: 16 },
    },
];

const optionsStaticChains = [
    {
        id: 'id1',
        title: 'QTZ',
        iconRight: { file: quartz, size: 16 },
    },
    {
        id: 'id2',
        title: 'OPL',
        iconRight: { file: opal, size: 16 },
    },
];

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options: optionsDefault,
};

Default.storyName = 'Default';

export const Status = Template.bind({});

Status.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options: optionsKeyValue,
    optionKey: 'identity',
    optionValue: 'message',
    statusText: 'Status text',
};

Status.storyName = 'Default w/ status';

export const Error = Template.bind({});

Error.args = {
    label: 'Label',
    additionalText: 'Additional text',
    placeholder: 'Placeholder',
    options: optionsValue,
    optionKey: 'message',
    optionValue: 'message',
    statusText: 'Error message',
    error: true,
};

Error.storyName = 'Default w/ error';

export const Minimal = Template.bind({});

Minimal.args = {
    placeholder: 'Placeholder',
    options: optionsDefault,
};

Minimal.storyName = 'Minimal';

export const Label = Template.bind({});

Label.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    options: optionsDefault,
};

Label.storyName = 'Minimal w/ label';

export const Value = Template.bind({});

Value.args = {
    placeholder: 'Placeholder',
    defaultValue: 'Option 4',
    options: optionsDefault,
};

Value.storyName = 'Minimal w/ value';

export const MinimalSize = Template.bind({});

MinimalSize.args = {
    placeholder: 'Placeholder',
    size: 'small',
    options: optionsDefault,
};

MinimalSize.storyName = 'Minimal w/ size Small';

export const Disabled = Template.bind({});

Disabled.args = {
    placeholder: 'Placeholder',
    defaultValue: 'Option 4',
    options: optionsDefault,
    disabled: true,
};

Disabled.storyName = 'Minimal disabled';

export const MinimalLibraryIcons = Template.bind({});

MinimalLibraryIcons.args = {
    placeholder: 'Placeholder',
    options: optionsLibraryIcons,
};

MinimalLibraryIcons.storyName = 'Minimal w/ library icons';

export const MinimalLibraryChains = Template.bind({});

MinimalLibraryChains.args = {
    placeholder: 'Placeholder',
    options: optionsLibraryChains,
};

MinimalLibraryChains.storyName = 'Minimal w/ library chains';

export const MinimalStaticChains = Template.bind({});

MinimalStaticChains.args = {
    placeholder: 'Placeholder',
    options: optionsStaticChains,
};

MinimalStaticChains.storyName = 'Minimal w/ static chains';

const TemplateMulti: ComponentStory<typeof Select> = (args) => {
    const [values, setValues] = useState<string[]>(['identity']);
    return (
        <Select
            {...args}
            values={values}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onChange={(options: SelectOptionProps[]) => {
                console.log('onChange', options);
                setValues(
                    options.map(
                        (option) => option[args.optionKey || 'id'] as string
                    )
                );
            }}
        />
    );
};

export const MultiSelect = TemplateMulti.bind({});

MultiSelect.args = {
    placeholder: 'Placeholder',
    options: optionsLibraryIcons,
    multi: true,
};

MultiSelect.storyName = 'Multi-selection default';

export const MultiSelectSmall = TemplateMulti.bind({});

MultiSelectSmall.args = {
    placeholder: 'Placeholder',
    options: optionsLibraryIcons,
    multi: true,
    size: 'small',
};

MultiSelectSmall.storyName = 'Multi-selection w/ size Small';

export const MultiSelectDisabled = TemplateMulti.bind({});

MultiSelectDisabled.args = {
    placeholder: 'Placeholder',
    options: optionsLibraryIcons,
    multi: true,
    disabled: true,
};

MultiSelectDisabled.storyName = 'Multi-selection disabled';
