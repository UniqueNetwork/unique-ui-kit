import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from '../components';

export default {
    title: 'Components/Tabs',
    component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
    const [contentIndex, setContentIndex] = useState(0);

    return (
        <>
            <Tabs
                {...args}
                changeContentIndex={(id: number) => {
                    setContentIndex(id);
                }}
            />
            <br />
            <pre>Content: {args.contents[contentIndex]}</pre>
        </>
    );
};

export const Default = Template.bind({});

Default.args = {
    titles: ['Label 1', 'Label 2', 'Label 3'],
    contents: [<>1</>, <>2</>, <>3</>],
    activeIndex: 0,
    disabledIndex: [2]
};

Default.storyName = 'Default';
