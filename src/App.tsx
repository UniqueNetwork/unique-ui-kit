import React, { FC } from 'react';
import { Layout } from './components';

const App: FC = () => (
    <Layout
        heading="Layout title"
        breadcrumbs={{
            options: [
                { title: 'Home', link: '#' },
                { title: 'Section', link: '#' },
                { title: 'Current', link: '#' }
            ]
        }}
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </Layout>
);
export default App;
