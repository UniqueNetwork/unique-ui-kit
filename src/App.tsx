import React, { FC } from 'react';
import { Select, Layout, Icon, Avatar } from './components';

const optionsKeyValue = [
    { identity: 'id1', message: 'Option 1' },
    { identity: 'id2', message: 'Option 2' },
    { identity: 'id3', message: 'Option 3' },
    { identity: 'id4', message: 'Option 4' },
    { identity: 'id5', message: 'Option 5' },
];

const App: FC = () => (
    <Layout
        heading="Layout title"
        breadcrumbs={{
            options: [
                { title: 'Home', link: '#' },
                { title: 'Section', link: '#' },
                { title: 'Current', link: '#' },
            ],
        }}
    >
        <Avatar size={24} type="circle" />
    </Layout>
);
export default App;
