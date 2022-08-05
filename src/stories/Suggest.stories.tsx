import React, { ReactNode, useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames';
import { Suggest, Text } from '../components';
import { sleep } from '../utils';
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

const Template: ComponentStory<typeof Suggest> = (args) => (
    <Suggest
        {...args}
        getActiveSuggestOption={(
            option: SuggestValues,
            activeOption: SuggestValues
        ) => option.id === activeOption.id}
        suggestions={values}
        getSuggestionValue={(value: SuggestValues) => value.title}
        onChange={console.log}
    />
);

export const Default = Template.bind({});

Default.args = {};

Default.storyName = 'Default';

export const DefaultValue = Template.bind({});

DefaultValue.args = {
    value: values[1],
};

DefaultValue.storyName = 'Default w/ value';

export const Disabled = Template.bind({});

Disabled.args = {
    value: values[0],
    inputProps: {
        disabled: true,
    },
};

Disabled.storyName = 'Default w/ disabled';

export const LoadingComponents = Template.bind({});

LoadingComponents.args = {
    isLoading: true,
};

LoadingComponents.storyName = 'Default w/ loader';

export const CustomItemComponents = Template.bind({});

const CustomLogicTemplate: ComponentStory<typeof Suggest> = (args) => (
    <Suggest
        {...args}
        suggestions={values}
        getSuggestionValue={(value: SuggestValues) =>
            `id-${value.id}, ${value.title}`
        }
        getActiveSuggestOption={(
            option: SuggestValues,
            activeOption: SuggestValues
        ) => option.id === activeOption.id}
        onSuggestionsFetchRequested={(val = '') =>
            values.filter(
                (value) =>
                    `${value.id}`.includes(val.toLowerCase()) ||
                    value.title.toLowerCase().includes(val.toLowerCase())
            )
        }
    />
);

export const CustomLogic = CustomLogicTemplate.bind({});

CustomLogic.args = {};

CustomLogic.storyName = 'Title and value search';

CustomItemComponents.args = {
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
                            minWidth: '24px',
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

CustomItemComponents.storyName = 'Custom option component';

export const CustomNoSuggestMessage = Template.bind({});

CustomNoSuggestMessage.args = {
    noSuggestMessage: 'Custom message when results not found',
};

CustomNoSuggestMessage.storyName = 'No results message';

export const CustomNoFoundComponents = Template.bind({});

CustomNoFoundComponents.args = {
    components: {
        SuggestEmpty: ({ message }) => (
            <div style={{ textAlign: 'center', padding: '15px' }}>
                <img style={{ marginBottom: '15px' }} src={nft1} alt="nft" />
                <p>{message}</p>
            </div>
        ),
    },
};

CustomNoFoundComponents.storyName = 'No results component';

export const CustomSuggestListComponents = Template.bind({});

CustomSuggestListComponents.args = {
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
                            minWidth: '24px',
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

CustomSuggestListComponents.storyName = 'Suggestions list components';

export const LoadingTextComponents = Template.bind({});

LoadingTextComponents.args = {
    isLoading: true,
    loadingText: 'Custom text...',
};

LoadingTextComponents.storyName = 'Custom loading text';

const ServerLoading: ComponentStory<typeof Suggest> = (args) => {
    const [isLoading, setLoading] = useState(false);
    const [suggests, setSuggests] = useState<SuggestValues[]>([]);

    const getPosts = async () => {
        setLoading(true);
        await sleep(1500);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((res) => setSuggests((prevState) => [...prevState, ...res]))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Suggest
                {...args}
                inputProps={{
                    placeholder: 'Server request',
                }}
                suggestions={suggests}
                getSuggestionValue={(value: SuggestValues) => value.title}
                getActiveSuggestOption={(
                    option: SuggestValues,
                    activeOption: SuggestValues
                ) => option.id === activeOption.id}
                isLoading={isLoading}
            />
        </>
    );
};

export const LoadingSuggestOptionsServer = ServerLoading.bind({});

LoadingSuggestOptionsServer.args = {};

LoadingSuggestOptionsServer.storyName = 'Server loading options';

const InfinityScroll: ComponentStory<typeof Suggest> = (args) => {
    const [isLoading, setLoading] = useState(false);
    const [suggests, setSuggests] = useState<SuggestValues[]>([]);
    const [page, setPage] = useState(1);

    const getPosts = async () => {
        setLoading(true);
        await sleep(1500);
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
            .then((res) => res.json())
            .then((res) => {
                setSuggests((prevState) => [...prevState, ...res]);
                setPage((prevState) => prevState + 1);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Suggest
                {...args}
                inputProps={{
                    placeholder: 'Server request',
                }}
                suggestions={suggests}
                getSuggestionValue={(value: SuggestValues) => value.title}
                getActiveSuggestOption={(
                    option: SuggestValues,
                    activeOption: SuggestValues
                ) => option.id === activeOption.id}
                isLoading={isLoading}
                onLoadMore={() => {
                    if (page === 10) {
                        return;
                    }
                    getPosts();
                }}
            />
        </>
    );
};

export const InfinityScrollSuggest = InfinityScroll.bind({});

InfinityScrollSuggest.args = {};

InfinityScrollSuggest.storyName = 'Infinity scroll';

const AsyncSearch: ComponentStory<typeof Suggest> = (args) => {
    const [isLoading, setLoading] = useState(false);
    const [suggests, setSuggests] = useState<SuggestValues[]>([]);

    const getPosts = async (title: string) => {
        setLoading(true);
        await sleep(1000);
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${title}`)
            .then((res) => res.json())
            .then((res) => {
                setSuggests(res);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getPosts('');
    }, []);

    return (
        <>
            <Suggest
                inputProps={{
                    placeholder: 'Server request',
                }}
                suggestions={suggests}
                getSuggestionValue={(value: SuggestValues) => value.title}
                getActiveSuggestOption={(
                    option: SuggestValues,
                    activeOption: SuggestValues
                ) => option.id === activeOption.id}
                isLoading={isLoading}
                onInputChange={(value) => {
                    getPosts(value);
                }}
            />
        </>
    );
};

export const AsyncSearchSuggest = AsyncSearch.bind({});

AsyncSearchSuggest.args = {};

AsyncSearchSuggest.storyName = 'Async search';
