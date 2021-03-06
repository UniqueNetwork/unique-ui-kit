import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip, Text } from '../components';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = ({ children, ...args }) => (
    <Tooltip {...args}>{children}</Tooltip>
);

export const Default = Template.bind({});

Default.args = {
    content: <span>Show me content</span>,
    children: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium at deserunt dolorem doloribus, facilis hic laborum
            libero maxime non perspiciatis placeat provident quae quam repellat
            rerum ut veniam. Accusantium, aperiam consequuntur, cumque
            doloremque eligendi error eveniet hic impedit, ipsa natus nemo
            nesciunt non officiis quibusdam repudiandae rerum totam voluptatem!
            Accusantium aliquid architecto assumenda beatae corporis culpa,
            cupiditate deleniti dolores eaque explicabo facilis id laborum
            magnam neque obcaecati odit porro quibusdam recusandae, sequi
            tempore veniam, vitae voluptas voluptatem voluptates voluptatum.
        </p>
    ),
};

Default.storyName = 'Default';

export const Offset = Template.bind({});

Offset.args = {
    content: <span>Show me content</span>,
    offset: 50,
    children: <p>Content shifted by 50px</p>,
};

Offset.storyName = 'Offset';

export const Placement = Template.bind({});

Placement.args = {
    content: <span>Show me content</span>,
    children: <p>Content is on the right</p>,
    placement: 'right',
};

Placement.storyName = 'Placement';
