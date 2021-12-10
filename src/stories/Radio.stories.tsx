import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Radio, RadioGroup } from '../components/Radio/Radio';

export default {
    title: 'Components/Radio',
    component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof RadioGroup> = (args) => {
    // const [value, setValue] = useState(args.options[0].value);
    return (
        <RadioGroup {...args} >
            <Radio value="Apple" checked={true} disabled={false} />
            <Radio value="Banana" disabled={false} />
            <Radio value="Panama" disabled={false} />
        </RadioGroup>

    );
};

export const Default = Template.bind({});

Default.args = {
    groupName: "fruits", size:'s'
};

// Default.storyName = 'Default';

// export const DefaultSize = Template.bind({});

// DefaultSize.args = {
//     options: [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Panama' }],
//     size: 's'
// };

// DefaultSize.storyName = 'Default w/ size';

// export const DefaultDisabled = Template.bind({});

// DefaultDisabled.args = {
//     options: [
//         { value: 'Apple' },
//         { value: 'Banana', disabled: true },
//         { value: 'Panama' }
//     ]
// };

// DefaultDisabled.storyName = 'Default w/ disabled';
