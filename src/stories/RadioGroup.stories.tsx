import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
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

Default.play = async ({ args, canvasElement }) => {
    testRadioClick(args, canvasElement);
};

export const DefaultSize = Template.bind({});

DefaultSize.args = {
    options: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Panama' }],
    size: 'm'
};

DefaultSize.storyName = 'Default w/ size';

DefaultSize.play = async ({ args, canvasElement }) => {
    testRadioClick(args, canvasElement);
};

export const DefaultDisabled = Template.bind({});

DefaultDisabled.args = {
    options: [
        { value: 'Apple' },
        { value: 'Banana', disabled: true },
        { value: 'Panama' }
    ]
};

DefaultDisabled.storyName = 'Default w/ disabled';

DefaultDisabled.play = async ({ args, canvasElement }) => {
    testRadioClick(args, canvasElement);
};

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

DefaultAlign.play = async ({ args, canvasElement }) => {
    testRadioClick(args, canvasElement);
};

const testRadioClick = (args, canvasElement) => {
    const canvas = within(canvasElement);

    args.options.forEach((option) => {
        canvas
            .findByLabelText(option.value)
            .then((finderOption) => {
                userEvent.click(finderOption);
                //  lcick 
            })
            .catch((error) => {
                console.error(error);
            });
    });
};
