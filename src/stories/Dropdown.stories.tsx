import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Avatar, Button, Dropdown, Icon, Text} from '../components';
import { SelectOptionProps } from '../types';
import avatar from '../assets/static/avatar.jpg';
import quartz from '../assets/static/quartz.svg';


const optionsDefault = [
    { id: 'id1', title: 'Option 1' },
    { id: 'id2', title: 'Option 2' },
    { id: 'id3', title: 'Option 3' },
    { id: 'id4', title: 'Option 4' },
    { id: 'id5', title: 'Option 5' }
];

const optionsLibraryIcons = [
    {
        id: 'identity',
        text: 'message',
        title: 'Title',
        icon: {
            name: 'arrow-down',
            size: 12,
            color: 'var(--color-grey-500)'
        }
    },
    {
        id: 'id2',
        title: 'Title',
        icon: { name: 'arrow-up', size: 12, color: 'var(--color-grey-500)' }
    },
    {
        id: 'id3',
        title: 'Author',
        text: 'message',
        icon: {
            name: 'arrow-down',
            size: 12,
            color: 'var(--color-grey-500)'
        }
    },
    {
        id: 'id4',
        title: 'Author',
        icon: {
            name: 'arrow-up',
            size: 12,
            color: 'var(--color-grey-500)'
        }
    }
];

export default {
    title: 'Components/Dropdown',
    component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
    const [value, setValue] = useState<string>();
    return (
        <Dropdown
            {...args}
            value={value}
            onChange={(option: SelectOptionProps) => {
                console.log('onChange', option);
                setValue(option[args.optionKey || 'id'] as string);
            }}
        >
            <Button title={'Show dropdown'} />
        </Dropdown>
    );
};


const TemplateIcon: ComponentStory<typeof Dropdown> = (args) => {
    return (<div style={{ display: 'flex', justifyContent: 'center'}}>
        <Dropdown
            {...args}
            onChange={(option: SelectOptionProps) => {
                console.log('onChange', option);
            }}
        >
            <Icon file={quartz} size={32}/>
        </Dropdown>
    </div>);
};

export const Default = Template.bind({});

Default.args = {
    options: optionsDefault
};

Default.storyName = 'Default';

export const DefaultWithIcon = TemplateIcon.bind({});

DefaultWithIcon.args = {
    placement: 'right',
    options: optionsDefault
};

DefaultWithIcon.storyName = 'Default w/ icon';

export const CustomOptions = Template.bind({});

CustomOptions.args = {
    options: optionsLibraryIcons,
    optionRender: (option) => {
        return <div style={{ display: 'flex', alignItems: 'center', columnGap: '8px', padding: '4px 8px'}}>
            <Avatar src={avatar} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text>{option.title || ''}</Text>
                <Text size={'s'} color={'grey-500'}>{option.text || ''}</Text>
            </div>
        </div>
    }
};

CustomOptions.storyName = 'Custom options';