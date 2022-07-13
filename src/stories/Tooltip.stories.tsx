import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TooltipSet } from '../internals';
import { Icon, Text, TooltipAlign } from '../components';

export default {
    title: 'Components/Tooltip',
    component: TooltipSet,
} as ComponentMeta<typeof TooltipSet>;

const TemplatePallete: ComponentStory<typeof TooltipSet> = (args) => (
    <TooltipSet {...args} />
);

const manualAligns = [
    { appearance: 'vertical', vertical: 'top', horizontal: 'left' },
    { appearance: 'vertical', vertical: 'top', horizontal: 'middle' },
    { appearance: 'vertical', vertical: 'top', horizontal: 'right' },
    { appearance: 'vertical', vertical: 'bottom', horizontal: 'left' },
    { appearance: 'vertical', vertical: 'bottom', horizontal: 'middle' },
    { appearance: 'vertical', vertical: 'bottom', horizontal: 'right' },
    { appearance: 'horizontal', vertical: 'top', horizontal: 'right' },
    { appearance: 'horizontal', vertical: 'middle', horizontal: 'right' },
    { appearance: 'horizontal', vertical: 'bottom', horizontal: 'right' },
    { appearance: 'horizontal', vertical: 'top', horizontal: 'left' },
    { appearance: 'horizontal', vertical: 'middle', horizontal: 'left' },
    { appearance: 'horizontal', vertical: 'bottom', horizontal: 'left' },
];

const defaultAligns = [
    {
        message: 'This is a single-line tooltip',
        link: 'single-line',
        icon: {
            name: 'chain-quartz',
        },
    },
    {
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quod ipsum mollitia exercitationem a animi perferendis porro aspernatur neque voluptatum repellat asperiores, distinctio ratione voluptates quibusdam odit. Atque, commodi fugiat',
        link: 'multi-line',
        icon: { name: 'chain-opal' },
        align: {
            appearance: 'horizontal',
            vertical: 'top',
            horizontal: 'right',
        },
    },
];

export const Default = TemplatePallete.bind({});

Default.args = {
    tooltips: defaultAligns.map((align) => ({
        children: <Text size="s">{align.link}</Text>,
        message: align.message,
    })),
};

Default.storyName = 'Default';

export const DefaultIcon = TemplatePallete.bind({});

DefaultIcon.args = {
    tooltips: defaultAligns.map((align) => ({
        children: (
            <Icon
                size={30}
                name={align.icon.name}
                color="var(--color-primary-500)"
            />
        ),
        align: align.align as TooltipAlign,
        message: align.message,
    })),
};

DefaultIcon.storyName = 'Default w/ Icon';

export const DefaultSingleline = TemplatePallete.bind({});

DefaultSingleline.args = {
    tooltips: manualAligns.map((align) => ({
        children: (
            <Text size="s">
                {align.appearance} {align.vertical} {align.horizontal}
            </Text>
        ),
        align: align as TooltipAlign,
        message: 'This is a single-line tooltip',
    })),
};

DefaultSingleline.storyName = 'Manual single-line';

export const DefaultMultiline = TemplatePallete.bind({});

DefaultMultiline.args = {
    tooltips: manualAligns.map((align) => ({
        children: (
            <Text size="s">
                {align.appearance} {align.vertical} {align.horizontal}
            </Text>
        ),
        align: align as TooltipAlign,
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quod ipsum mollitia exercitationem a animi perferendis porro aspernatur neque voluptatum repellat asperiores, distinctio ratione voluptates quibusdam odit. Atque, commodi fugiat',
    })),
};

DefaultMultiline.storyName = 'Manual multi-line';
