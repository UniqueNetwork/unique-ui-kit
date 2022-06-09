import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioGroup } from '../components';
import { useState } from 'react';

export default {
    title: 'Components/RadioGroup',
    component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const DEFAULT_OPTIONS = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'panama', label: 'Panama' },
];

const Template: ComponentStory<typeof RadioGroup> = (args) => {
    return <RadioGroup {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    options: DEFAULT_OPTIONS,
};

Default.storyName = 'Default';

export const DefaultSize = Template.bind({});

DefaultSize.args = {
    options: DEFAULT_OPTIONS,
    size: 'm',
};

DefaultSize.storyName = 'Default w/ size';

export const DefaultDisabled = Template.bind({});

DefaultDisabled.args = {
    options: [
        ...DEFAULT_OPTIONS,
        { value: 'juice', label: 'Juice', disabled: true },
    ],
};

DefaultDisabled.storyName = 'Default w/ disabled';

export const DefaultValue = Template.bind({});

DefaultValue.args = {
    options: DEFAULT_OPTIONS,
    defaultValue: DEFAULT_OPTIONS[1].value,
};

DefaultValue.storyName = 'Default w/ value';

export const DefaultAlign = Template.bind({});

DefaultAlign.args = {
    options: DEFAULT_OPTIONS,
    align: 'horizontal',
};

DefaultAlign.storyName = 'Default w/ align';

const Controlled: ComponentStory<typeof RadioGroup> = () => {
    const [value, setValue] = useState(DEFAULT_OPTIONS[0].value);
    return (
        <RadioGroup
            options={DEFAULT_OPTIONS}
            value={value}
            onChange={({ value }) => setValue(value)}
        />
    );
};

export const ControlledValue = Controlled.bind({});

ControlledValue.storyName = 'Controlled value';
