import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorPalette } from '../components';

export default {
    title: 'Design Tokens/Colors',
    component: ColorPalette
} as ComponentMeta<typeof ColorPalette>;

const Template: ComponentStory<typeof ColorPalette> = (args) => (
    <ColorPalette {...args} />
);

export const Base = Template.bind({});

Base.args = {
    palette: 'base-colors',
    title: 'Base colors',
    colors: [
        'color-primary-500',
        'color-secondary-500',
        'color-blue-grey-500',
        'color-grey-500',
        'color-coral-500',
        'color-additional-positive-500',
        'color-additional-warning-500'
    ]
};

Base.storyName = 'Base colors';

export const Palette = Template.bind({});

Palette.args = {
    palette: 'color-palette',
    title: 'Color palette',
    colors: [
        'color-primary-100',
        'color-primary-200',
        'color-primary-300',
        'color-primary-400',
        'color-primary-500',
        'color-primary-600',
        'color-primary-700',
        'color-secondary-100',
        'color-secondary-200',
        'color-secondary-300',
        'color-secondary-400',
        'color-secondary-500',
        'color-secondary-600',
        'color-secondary-700',
        'color-blue-grey-100',
        'color-blue-grey-200',
        'color-blue-grey-300',
        'color-blue-grey-400',
        'color-blue-grey-500',
        'color-blue-grey-600',
        'color-blue-grey-700',
        'color-grey-100',
        'color-grey-200',
        'color-grey-300',
        'color-grey-400',
        'color-grey-500',
        'color-grey-600',
        'color-grey-700',
        'color-coral-100',
        'color-coral-200',
        'color-coral-300',
        'color-coral-400',
        'color-coral-500',
        'color-coral-600',
        'color-coral-700',
        'color-additional-positive-500',
        'color-additional-positive-100',
        'color-additional-warning-500',
        'color-additional-warning-100'
    ]
};

Palette.storyName = 'Color palette';
