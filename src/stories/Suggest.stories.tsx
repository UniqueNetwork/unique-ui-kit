import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Suggest, Text } from '../components';
import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

import nft1 from '../assets/static/nft-1.png';

export default {
    title: 'Components/Suggest',
    component: Suggest,
} as ComponentMeta<typeof Suggest>;

const values = [
    {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        group: 1,
    },
    {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        group: 2,
    },
    {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        group: 1,
    },
    {
        userId: 1,
        id: 4,
        title: 'quasi exercitationem repellat qui ipsa sit aut',
        group: 2,
    },
];

type SuggestValues = typeof values[number];

const Template: ComponentStory<typeof Suggest> = ({ inputProps, ...args }) => {
    const [value, setValue] = useState('');
    return (
        <Suggest
            inputProps={{ ...inputProps, value, onChange: setValue }}
            {...args}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    suggestions: values,
    getSuggestionValue: (value: SuggestValues) => value.title,
};

Default.storyName = 'Default';

const CustomLogicTemplate: ComponentStory<typeof Suggest> = ({
    inputProps,
    ...args
}) => {
    const [value, setValue] = useState('');
    return (
        <>
            <Text>Search for value by id and title</Text>
            <Suggest
                inputProps={{ ...inputProps, value, onChange: setValue }}
                {...args}
            />
        </>
    );
};

export const CustomLogic = CustomLogicTemplate.bind({});

CustomLogic.args = {
    suggestions: values,
    getSuggestionValue: (value: SuggestValues) =>
        `id-${value.id}, ${value.title}`,
    onSuggestionsFetchRequested: (val = '') =>
        values.filter(
            (value) =>
                `${value.id}`.includes(val.toLowerCase()) ||
                value.title.toLowerCase().includes(val.toLowerCase())
        ),
};

CustomLogic.storyName = 'Custom logic filter items';

export const DefaultValue = Template.bind({});

DefaultValue.args = {
    suggestions: values,
    getSuggestionValue: (value: SuggestValues) => value.title,
    defaultValue: values[1],
};

DefaultValue.storyName = 'Default Value';

export const Disabled = Template.bind({});

Disabled.args = {
    suggestions: values,
    getSuggestionValue: (value: SuggestValues) => value.title,
    defaultValue: values[0],
    inputProps: {
        value: '',
        onChange: () => {},
        disabled: true,
    },
};

Disabled.storyName = 'Disabled Value';

export const CustomNoSuggestMessage = Template.bind({});

CustomNoSuggestMessage.args = {
    suggestions: values,
    getSuggestionValue: (value: SuggestValues) => value.title,
    noSuggestMessage: 'Custom message when results not found',
};

CustomNoSuggestMessage.storyName = 'Custom message when results not found';

export const CustomItemComponents = Template.bind({});

CustomItemComponents.args = {
    suggestions: values,
    getSuggestionValue: (value: SuggestValues) => value.title,
    components: {
        SuggestItem: ({ suggestion, isActive }: any) => (
            <div
                className={classNames('suggestion-item', {
                    isActive,
                })}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={nft1}
                        alt="image"
                        style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            marginRight: '10px',
                        }}
                    />

                    <div>
                        {suggestion.title} [id {suggestion.id}]
                    </div>
                </div>
            </div>
        ),
    },
};

CustomItemComponents.storyName = 'Custom item component';

export const CustomNoFoundComponents = Template.bind({});

CustomNoFoundComponents.args = {
    suggestions: values,
    getSuggestionValue: (value: SuggestValues) => value.title,
    components: {
        SuggestEmpty: ({ message }) => (
            <div style={{ textAlign: 'center', padding: '15px' }}>
                <img style={{ marginBottom: '15px' }} src={nft1} alt="nft" />
                <p>{message}</p>
            </div>
        ),
    },
};

CustomNoFoundComponents.storyName = 'Custom not found results component';

export const CustomSuggestListComponents = Template.bind({});

CustomSuggestListComponents.args = {
    suggestions: values,
    getSuggestionValue: (value: SuggestValues) => value.title,
    components: {
        SuggestWrapper: ({ suggestions, children }: any) => {
            const group1 = suggestions.filter(
                (value: SuggestValues) => value.group === 1
            );
            const group2 = suggestions.filter(
                (value: SuggestValues) => value.group === 2
            );
            const Title = ({ children }: { children: ReactNode }) => (
                <p
                    style={{
                        color: 'var(--color-grey-500)',
                        padding: '10px 15px',
                    }}
                >
                    {children}
                </p>
            );
            const Link = ({ children }: { children: ReactNode }) => (
                <a
                    href="#"
                    style={{
                        color: 'var(--color-primary-500)',
                        margin: '5px 15px',
                        display: 'inline-block',
                        textDecoration: 'none',
                    }}
                >
                    {children}
                </a>
            );
            return (
                <>
                    {group1.length > 0 && (
                        <div
                            style={{
                                borderBottom:
                                    '1px dashed var(--color-grey-300)',
                                paddingBottom: '10px',
                            }}
                        >
                            <Title>NFTs</Title>
                            <div>{children(group1)}</div>
                            <Link>View all results</Link>
                        </div>
                    )}
                    {group2.length > 0 && (
                        <div style={{ paddingBottom: '10px' }}>
                            <Title>Collections</Title>
                            <div>{children(group2)}</div>
                            <Link>View all results</Link>
                        </div>
                    )}
                </>
            );
        },
        SuggestItem: ({ suggestion, isActive }: any) => (
            <div
                className={classNames('suggestion-item', {
                    isActive,
                })}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={nft1}
                        alt="image"
                        style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            marginRight: '10px',
                        }}
                    />

                    <div>
                        {suggestion.title}{' '}
                        {suggestion.group === 1
                            ? `#${suggestion.id}`
                            : `[id ${suggestion.id}]`}
                    </div>
                </div>
            </div>
        ),
    },
};

CustomSuggestListComponents.storyName = 'Custom suggest list component';
