import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Button, Modal, Heading, Text, Tabs } from '../components';

export default {
    title: 'Components/Modal',
    component: Modal,
    subcomponents: { Button, Heading, Text, Tabs },
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
    isClosable: true,
};

Default.storyName = 'Default';

export const DefaultNonClosable = Template.bind({});

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
    isClosable: true,
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
                        marginTop: 20,
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
    isClosable: true,
};

DefaultButtons.storyName = 'Default w/ Buttons';

const TemplateHighHeight: ComponentStory<typeof Modal> = (args) => {
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
                    aliqua. Tellus elementum sagittis vitae et leo duis ut.
                    Lobortis elementum nibh tellus molestie nunc. Facilisis
                    mauris sit amet massa vitae. Et magnis dis parturient montes
                    nascetur ridiculus mus. Natoque penatibus et magnis dis.
                    Curabitur gravida arcu ac tortor dignissim convallis aenean.
                    Tristique et egestas quis ipsum. Leo in vitae turpis massa
                    sed elementum. Sed augue lacus viverra vitae congue eu
                    consequat ac felis. Quis imperdiet massa tincidunt nunc
                    pulvinar sapien et. Sit amet facilisis magna etiam tempor
                    orci eu. Ut pharetra sit amet aliquam id. Erat pellentesque
                    adipiscing commodo elit at imperdiet. Congue nisi vitae
                    suscipit tellus mauris a diam maecenas sed. Vel quam
                    elementum pulvinar etiam non quam lacus suspendisse. Est
                    pellentesque elit ullamcorper dignissim cras tincidunt. In
                    est ante in nibh. Et malesuada fames ac turpis egestas
                    integer eget. Tristique senectus et netus et.
                </Text>
                <Text>
                    Nibh sit amet commodo nulla facilisi nullam vehicula ipsum.
                    Volutpat diam ut venenatis tellus in metus vulputate eu
                    scelerisque. Pharetra et ultrices neque ornare aenean
                    euismod elementum nisi. Urna molestie at elementum eu
                    facilisis. Viverra nam libero justo laoreet sit amet cursus.
                    Porttitor massa id neque aliquam vestibulum. Etiam sit amet
                    nisl purus in mollis. Sed elementum tempus egestas sed sed
                    risus pretium quam vulputate. Sociis natoque penatibus et
                    magnis dis parturient montes. Quam elementum pulvinar etiam
                    non quam lacus suspendisse faucibus. Purus semper eget duis
                    at tellus at urna. At risus viverra adipiscing at. Ut
                    consequat semper viverra nam libero justo laoreet. Purus non
                    enim praesent elementum facilisis leo vel fringilla. Dolor
                    sit amet consectetur adipiscing elit. Tortor dignissim
                    convallis aenean et tortor at. Lobortis feugiat vivamus at
                    augue eget. Egestas egestas fringilla phasellus faucibus
                    scelerisque eleifend donec pretium vulputate.
                </Text>
                <Text>
                    Diam phasellus vestibulum lorem sed risus ultricies. Morbi
                    tristique senectus et netus et. Nullam ac tortor vitae purus
                    faucibus ornare suspendisse sed nisi. Lobortis feugiat
                    vivamus at augue eget arcu dictum varius. Suspendisse in est
                    ante in nibh mauris cursus mattis. Amet facilisis magna
                    etiam tempor orci eu. At urna condimentum mattis
                    pellentesque id. Varius duis at consectetur lorem donec.
                    Vehicula ipsum a arcu cursus vitae congue. Fermentum iaculis
                    eu non diam phasellus vestibulum lorem. Orci porta non
                    pulvinar neque laoreet suspendisse interdum consectetur.
                    Tellus in hac habitasse platea. Tincidunt arcu non sodales
                    neque sodales. Egestas fringilla phasellus faucibus
                    scelerisque eleifend donec. Felis donec et odio pellentesque
                    diam volutpat commodo sed egestas. Viverra suspendisse
                    potenti nullam ac tortor vitae purus faucibus ornare. Augue
                    mauris augue neque gravida in.
                </Text>
                <Text>
                    Egestas egestas fringilla phasellus faucibus scelerisque
                    eleifend donec pretium vulputate. Morbi leo urna molestie
                    at. Amet facilisis magna etiam tempor orci eu lobortis
                    elementum nibh. Malesuada fames ac turpis egestas integer
                    eget aliquet. Enim nunc faucibus a pellentesque sit amet
                    porttitor. Interdum posuere lorem ipsum dolor sit. Fames ac
                    turpis egestas sed tempus. Sapien nec sagittis aliquam
                    malesuada bibendum arcu. Nunc eget lorem dolor sed viverra
                    ipsum nunc aliquet bibendum. Quam adipiscing vitae proin
                    sagittis nisl rhoncus mattis rhoncus. Et tortor at risus
                    viverra adipiscing at. Faucibus turpis in eu mi bibendum
                    neque. Quisque egestas diam in arcu cursus euismod quis
                    viverra nibh. A condimentum vitae sapien pellentesque
                    habitant morbi tristique senectus. Morbi blandit cursus
                    risus at ultrices mi tempus imperdiet. Amet est placerat in
                    egestas erat. Diam donec adipiscing tristique risus nec
                    feugiat in fermentum.
                </Text>
            </Modal>
        </>
    );
};

export const DefaultHighHeight = TemplateHighHeight.bind({});

DefaultHighHeight.args = {
    isClosable: true,
};

DefaultHighHeight.storyName = 'Default w/ high height';
