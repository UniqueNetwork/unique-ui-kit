import React, { FC } from 'react';
import { Layout } from './components';
import { InputTextStoryBook } from './books';
import './assets/style/style.scss';

const App: FC = () => (
    <Layout>
        <InputTextStoryBook />
    </Layout>
);

export default App;
