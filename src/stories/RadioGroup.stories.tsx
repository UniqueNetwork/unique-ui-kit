import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioGroup } from '../components';
export default {
    title: 'Components/RadioGroup',
    component: RadioGroup
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => {
    return <RadioGroup {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    options: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Panama' }]
};

Default.storyName = 'Default';

export const DefaultSize = Template.bind({});

DefaultSize.args = {
    options: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Panama' }],
    size: 'm'
};

DefaultSize.storyName = 'Default w/ size';

export const DefaultDisabled = Template.bind({});

DefaultDisabled.args = {
    options: [
        { value: 'Apple' },
        { value: 'Banana', disabled: true },
        { value: 'Panama' }
    ]
};

DefaultDisabled.storyName = 'Default w/ disabled';

export const DefaultValue = Template.bind({});

DefaultValue.args = {
    options: [
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Panama', selected: true }
    ]
};

DefaultValue.storyName = 'Default w/ value';

export const DefaultAlign = Template.bind({});

DefaultAlign.args = {
    options: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Panama' }],
    align: 'horizontal'
};

DefaultAlign.storyName = 'Default w/ align';
