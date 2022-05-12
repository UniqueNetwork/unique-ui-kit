import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from '../components';

export default {
    title: 'Components/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {};

Default.storyName = 'Default';

export const CustomLabel = Template.bind({});

CustomLabel.args = {
    label: 'Loading...',
};

CustomLabel.storyName = 'Custom label';

export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
    label: null,
};

WithoutLabel.storyName = 'Without label';

export const DefaultWithSize = Template.bind({});

DefaultWithSize.args = {
    size: 'middle',
};

DefaultWithSize.storyName = 'Default w/ size';

export const DefaultWithPlacement = Template.bind({});

DefaultWithPlacement.args = {
    placementLabel: 'bottom',
};

DefaultWithPlacement.storyName = 'Default w/ placement';

const FullPage: ComponentStory<typeof Loader> = (args) => (
    <div style={{ fontFamily: 'var(--prop-font-family)' }}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            magnam, nisi placeat porro sapiente velit veniam. Alias atque aut
            culpa, dolores eligendi enim, eveniet illum impedit in ipsum
            mollitia omnis quaerat reiciendis repudiandae ullam ut voluptates.
            Commodi earum, facilis ipsa libero maiores nesciunt pariatur quam
            similique temporibus totam. Cum doloribus mollitia, omnis
            praesentium qui quod repudiandae similique sunt, ullam vero
            voluptate voluptatibus? Ducimus et nesciunt praesentium quas tenetur
            unde. Alias autem, consectetur consequatur deserunt dolore ducimus
            ea eius enim eum exercitationem expedita facere fugit id impedit
            maxime minima, nesciunt numquam odit officiis pariatur, quas quod
            rerum saepe soluta veniam voluptate!
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            magnam, nisi placeat porro sapiente velit veniam. Alias atque aut
            culpa, dolores eligendi enim, eveniet illum impedit in ipsum
            mollitia omnis quaerat reiciendis repudiandae ullam ut voluptates.
            Commodi earum, facilis ipsa libero maiores nesciunt pariatur quam
            similique temporibus totam. Cum doloribus mollitia, omnis
            praesentium qui quod repudiandae similique sunt, ullam vero
            voluptate voluptatibus? Ducimus et nesciunt praesentium quas tenetur
            unde. Alias autem, consectetur consequatur deserunt dolore ducimus
            ea eius enim eum exercitationem expedita facere fugit id impedit
            maxime minima, nesciunt numquam odit officiis pariatur, quas quod
            rerum saepe soluta veniam voluptate!
        </p>
        <Loader {...args} />
    </div>
);

export const DefaultWithFullPage = FullPage.bind({});

DefaultWithFullPage.args = {
    isFullPage: true,
};

DefaultWithFullPage.storyName = 'Default w/ full page';
