import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Checkbox } from '../components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [checkboxStatus, setCheckboxStatus] = useState(args.value);

    useEffect(() => {
        setCheckboxStatus(args.value);
    }, [args.value]);
    return (
        <>
            <Checkbox
                {...args}
                value={checkboxStatus}
                onChange={(value) => {
                    setCheckboxStatus(value);
                }}
            />
        </>
    );
};

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    value: false,
    disabled: false
};

Default.storyName = 'Default';

export const Active = Template.bind({});

Active.args = {
    label: 'Label',
    value: true,
    disabled: false
};

Active.storyName = 'Default w/ active';

export const Disable = Template.bind({});

Disable.args = {
    label: 'Label',
    value: true,
    disabled: true
};

Disable.storyName = 'Default w/ disable';

export const Small = Template.bind({});

Small.args = {
    label: 'Label',
    value: false,
    disabled: false,
    size: 's'
};

Small.storyName = 'Small';

export const SmallActive = Template.bind({});

SmallActive.args = {
    label: 'Label',
    value: true,
    disabled: false,
    size: 's'
};

SmallActive.storyName = 'Small w/ active';

export const SmallDisable = Template.bind({});

SmallDisable.args = {
    label: 'Label',
    value: true,
    disabled: true,
    size: 's'
};

SmallDisable.storyName = 'Small w/ disable';
