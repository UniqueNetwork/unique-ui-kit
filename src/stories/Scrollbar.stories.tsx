import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Scrollbar, Text } from '../components';

export default {
    title: 'Components/Scrollbar',
    component: Scrollbar,
} as ComponentMeta<typeof Scrollbar>;

const Template: ComponentStory<typeof Scrollbar> = ({ children, ...args }) => (
    <div style={{ height: '100px', width: '300px' }}>
        <Scrollbar {...args}>{children}</Scrollbar>
    </div>
);

export const Default = Template.bind({});

Default.args = {
    children: (
        <div style={{ padding: '10px' }}>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                animi earum esse eveniet inventore iure maiores minima modi
                natus rem, soluta tempora vel. Aspernatur atque, commodi
                consequuntur delectus dolorum excepturi expedita minus sit.
                Commodi consectetur culpa enim laboriosam nisi nobis omnis
                quibusdam. Ad alias aspernatur debitis delectus distinctio
                dolore ducimus earum eius error esse ex exercitationem fuga
                inventore iste magni molestiae, nemo quam saepe vero voluptatem.
                Amet commodi dolorum et, itaque minima odio omnis optio ratione
                recusandae repellat tempore ullam vero? Aliquid, architecto ea
                ex illum inventore repellat. Ab aliquid dolores eveniet illo
                laborum, nam nobis numquam qui recusandae temporibus. Ab
                accusantium aliquid cupiditate debitis dicta dolorum eligendi
                eos error esse eveniet excepturi exercitationem expedita fugit
                impedit in ipsam natus nisi nulla omnis optio placeat
                praesentium provident, quia quidem quisquam quos repellat sequi
                sit soluta tempora tenetur totam unde veniam veritatis vero
            </Text>
        </div>
    ),
};

Default.storyName = 'Default';
