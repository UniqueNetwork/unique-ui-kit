import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Scrollbar } from '../components';

export default {
    title: 'Components/Scrollbar',
    component: Scrollbar,
} as ComponentMeta<typeof Scrollbar>;

const Template: ComponentStory<typeof Scrollbar> = (args) => (
    <Scrollbar {...args}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        aliquam harum tenetur veniam id quod quasi hic. Laboriosam facere,
        consequatur delectus modi suscipit voluptatum distinctio impedit
        voluptates fuga quia illo! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt aliquam harum tenetur veniam id quod quasi
        hic. Laboriosam facere, consequatur delectus modi suscipit voluptatum
        distinctio impedit voluptates fuga quia illo! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nesciunt aliquam harum tenetur veniam id
        quod quasi hic. Laboriosam facere, consequatur delectus modi suscipit
        voluptatum distinctio impedit voluptates fuga quia illo! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt aliquam harum
        tenetur veniam id quod quasi hic. Laboriosam facere, consequatur
        delectus modi suscipit voluptatum distinctio impedit voluptates fuga
        quia illo!
    </Scrollbar>
);

export const Default = Template.bind({});

Default.args = {};

Default.storyName = 'Default';

export const DefaultStyle = Template.bind({});

DefaultStyle.args = {
    width: '50%',
    height: 150,
    style: {
        margin: '0 auto',
        color: 'var(--color-primary-500)',
    },
};

DefaultStyle.storyName = 'Default w/ style';
