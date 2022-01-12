import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CodeWrapper } from '../internals';
import token from '../assets/tokens/unique.token.json';

export default {
    title: 'Design Tokens/Tokens',
    component: CodeWrapper
} as ComponentMeta<typeof CodeWrapper>;

const Token: ComponentStory<typeof CodeWrapper> = (args) => (
    <CodeWrapper {...args} />
);

export const Json = Token.bind({});

Json.args = {
    title: 'Token example',
    code: token,
    theme: 'dark'
};

Json.storyName = 'Token example';
