import { ComponentMeta, ComponentStory } from '@storybook/react';
import nft7 from '../assets/static/nft-7.png';
import { Upload } from '../';

export default {
    title: 'Components/Upload',
    component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => {
    return (
        <Upload
            {...args}
            onChange={(data) => {
                const { url, file } = data || {};
                console.log('url', url);
                console.log('file', file);
            }}
        />
    );
};

export const Default = Template.bind({});

Default.args = {};

export const DefaultWithPreload = Template.bind({});

DefaultWithPreload.args = {
    upload: nft7,
};

DefaultWithPreload.storyName = 'Default w/o preload';

export const SquareView = Template.bind({});

SquareView.args = {
    type: 'square',
};

SquareView.storyName = 'Square';

export const Disabled = Template.bind({});

Disabled.args = {
    disabled: true,
};

Disabled.storyName = 'Default w/o disabled';

export const WithValidation = Template.bind({});

WithValidation.args = {
    beforeUpload: ({ file }) => {
        return file.size < 3000;
    },
};

WithValidation.storyName = 'Default w/ validation (max: 2 kb)';
