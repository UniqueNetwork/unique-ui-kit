import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from '../components';

export default {
    title: 'Components/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = ({
    activeIndex,
    labels,
    disabledIndexes,
    type,
}) => {
    const [active, setActive] = useState(activeIndex);
    return (
        <>
            <Tabs
                labels={labels}
                activeIndex={active}
                onClick={setActive}
                disabledIndexes={disabledIndexes}
                type={type}
            />
            <Tabs activeIndex={active}>
                <>Content 1</>
                <>Content 2</>
                <>Content 3</>
            </Tabs>
        </>
    );
};

export const Default = Template.bind({});

Default.args = {
    activeIndex: 0,
    labels: ['Label 1', 'Label 2', 'Label 3'],
};

Default.storyName = 'Default';

export const Active = Template.bind({});

Active.args = {
    activeIndex: 2,
    labels: ['Label 1', 'Label 2', 'Label 3'],
};

Active.storyName = 'Default w/ active';

export const Disabled = Template.bind({});

Disabled.args = {
    activeIndex: 0,
    labels: ['Label 1', 'Label 2', 'Label 3'],
    disabledIndexes: [2],
};

Disabled.storyName = 'Default w/ disabled';

const TemplateIntermediate: ComponentStory<typeof Tabs> = ({
    activeIndex,
    labels,
    disabledIndexes,
    type,
}) => {
    const [active, setActive] = useState(activeIndex);
    return (
        <>
            <Tabs
                labels={labels}
                activeIndex={active}
                onClick={setActive}
                disabledIndexes={disabledIndexes}
                type={type}
            />
            <div className="unique-tab-intermediate">
                Some intermediate content
            </div>
            <Tabs activeIndex={active}>
                <>Content 1</>
                <>Content 2</>
                <>Content 3</>
            </Tabs>
        </>
    );
};

export const Intermediate = TemplateIntermediate.bind({});

Intermediate.args = {
    activeIndex: 0,
    labels: ['Label 1', 'Label 2', 'Label 3'],
};

Intermediate.storyName = 'Default w/ intermediate';

export const Slim = TemplateIntermediate.bind({});

Slim.args = {
    type: 'slim',
    activeIndex: 0,
    labels: ['NFT', 'Settings'],
};

Slim.storyName = 'Slim w/ intermediate';
