import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Button, Modal, Heading, Text, Tabs } from '../components';

export default {
    title: 'Components/Modal',
    component: Modal,
    subcomponents: { Button, Heading, Text, Tabs }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const [isVisible, setVisible] = useState<boolean>(true);
    return (
        <>
            <Button
                title="Open modal"
                role="primary"
                onClick={() => setVisible(true)}
            />
            <Modal
                {...args}
                isVisible={isVisible}
                onClose={() => setVisible(false)}
            >
                <Heading size="2">Modal title</Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Text>
            </Modal>
        </>
    );
};

export const Default = Template.bind({});

Default.args = {
    title: 'Modal title',
    isClosable: true
};

Default.storyName = 'Default';

export const DefaultNonClosable = Template.bind({});

DefaultNonClosable.args = {
    title: 'Modal title'
};

DefaultNonClosable.storyName = 'Default w/o closure';

const TemplateTabs: ComponentStory<typeof Modal> = (args) => {
    const [isVisible, setVisible] = useState<boolean>(true);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <Button
                title="Open modal"
                role="primary"
                onClick={() => setVisible(true)}
            />
            <Modal
                {...args}
                isVisible={isVisible}
                onClose={() => setVisible(false)}
            >
                <Heading size="2">Modal title</Heading>
                <Tabs
                    activeIndex={activeIndex}
                    labels={['Label 1', 'Label 2']}
                    onClick={setActiveIndex}
                />
                <Tabs activeIndex={activeIndex}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                    <Text>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </Tabs>
            </Modal>
        </>
    );
};

export const DefaultTabs = TemplateTabs.bind({});

DefaultTabs.args = {
    title: 'Modal title with Tabs',
    isClosable: true
};

DefaultTabs.storyName = 'Default w/ Tabs';

const TemplateButtons: ComponentStory<typeof Modal> = (args) => {
    const [isVisible, setVisible] = useState<boolean>(true);
    return (
        <>
            <Button
                title="Open modal"
                role="primary"
                onClick={() => setVisible(true)}
            />
            <Modal
                {...args}
                isVisible={isVisible}
                onClose={() => setVisible(false)}
            >
                <Heading size="2">Modal title</Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Text>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: 20,
                        marginTop: 20
                    }}
                >
                    <Button
                        title="Secondary button"
                        onClick={() => console.log('secondary click')}
                    />
                    <Button
                        title="Primary button"
                        role="primary"
                        onClick={() => console.log('primary click')}
                    />
                </div>
            </Modal>
        </>
    );
};

export const DefaultButtons = TemplateButtons.bind({});

DefaultButtons.args = {
    title: 'Modal title with Tabs',
    isClosable: true
};

DefaultButtons.storyName = 'Default w/ Buttons';
