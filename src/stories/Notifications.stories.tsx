import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Notifications } from '../components';
import { FC } from 'react';
import { useNotifications } from '../components/Notifications/hook/useNotifications';

export default {
    title: 'Components/Notifications',
    component: Notifications,
    subcomponents: { Button },
} as ComponentMeta<typeof Notifications>;

const getAlertContent = () =>
    Array.from({ length: ((Math.random() / 2) * 10) | 1 })
        .map(() => 'this is the content of the notification')
        .join();

const Template: ComponentStory<any> = () => {
    const { info, warning, error } = useNotifications();
    return (
        <div style={{ display: 'flex', columnGap: '16px' }}>
            <Button
                title={'Show info alert'}
                onClick={() => info(getAlertContent())}
            />
            <Button
                title={'Show warning alert'}
                onClick={() => warning(getAlertContent())}
            />
            <Button
                title={'Show error alert'}
                onClick={() => error(getAlertContent())}
            />
        </div>
    );
};

export const Default = Template.bind({});

Default.storyName = 'Default';
Default.decorators = [
    (Story: FC) => (
        <Notifications>
            <Story />
        </Notifications>
    ),
];

const TemplateIcons: ComponentStory<any> = () => {
    const { info } = useNotifications();
    return (
        <div style={{ display: 'flex', columnGap: '16px' }}>
            <Button
                title={'Show info alert'}
                onClick={() =>
                    info(getAlertContent(), {
                        name: 'burn',
                        size: 32,
                        color: 'white',
                    })
                }
            />
        </div>
    );
};

export const DefaultIcons = TemplateIcons.bind({});

DefaultIcons.storyName = 'Default w/ custom icons';
DefaultIcons.decorators = [
    (Story: FC) => (
        <Notifications>
            <Story />
        </Notifications>
    ),
];

export const DefaultNonClosable = Template.bind({});

DefaultNonClosable.storyName = 'Default non-closable';
DefaultNonClosable.decorators = [
    (Story: FC) => (
        <Notifications closable={false}>
            <Story />
        </Notifications>
    ),
];

export const DefaultClosingDelay = Template.bind({});

DefaultClosingDelay.storyName = 'Default w/ close delay 1s';
DefaultClosingDelay.decorators = [
    (Story: FC) => (
        <Notifications closingDelay={1000}>
            <Story />
        </Notifications>
    ),
];

export const LeftPlacement = Template.bind({});

LeftPlacement.storyName = 'Placement left';
LeftPlacement.decorators = [
    (Story: FC) => (
        <Notifications placement={'left'}>
            <Story />
        </Notifications>
    ),
];
