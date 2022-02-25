import { ComponentMeta, ComponentStory } from '@storybook/react';
import nft7 from '../assets/static/nft-7.png';
import { Upload } from '../widgets';

export default {
    title: 'Widgets/Upload',
    component: Upload
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => {
    return (
        <Upload
            {...args}
            onChange={(url, blob) => {
                console.log('url', url);
                console.log('blob', blob);
            }}
        />
    );
};

export const Default = Template.bind({});

Default.args = {};
