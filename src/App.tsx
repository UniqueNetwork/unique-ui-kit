import React, { FC } from 'react';
import { Button, Layout } from './components';

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
        <Button title="Click me" role="primary" onClick={() => {}} />
    </Layout>
);
export default App;
