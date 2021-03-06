import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stepper } from '../components';

export default {
    title: 'Components/Stepper',
    component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
    <Stepper {...args} />
);

export const Steps = Template.bind({});

Steps.args = {
    activeStep: 1,
    steps: ['First Step', 'Second Step', 'Third Step'],
};

Steps.storyName = 'Steps';

export const ClickStep = Template.bind({});

ClickStep.args = {
    activeStep: 1,
    steps: ['First Step', 'Second Step', 'Third Step'],
    onClickStep: (step) => console.log(`Active step - ${step}`),
};

ClickStep.storyName = 'Handle click on step';
