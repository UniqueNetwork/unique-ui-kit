import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from '../components';

export default {
    title: 'Components/Radio',
    component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
    const [radioStatus, setradioStatus] = useState(args.value);

    useEffect(() => {
        setradioStatus(args.value);
    }, [args.value]);
    return (
        <>
            <Radio
                {...args}
                value={radioStatus}
                onChange={(value) => {
                    setradioStatus(value);
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
