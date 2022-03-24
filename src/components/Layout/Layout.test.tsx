import { render, screen } from '@testing-library/react';
import Layout from './Layout';

it('children check', () => {
    render(<Layout>test children</Layout>);
    expect(screen.queryByText('test children')).toBeTruthy();
});

it('heading check', () => {
    render(<Layout heading="heading test">test children</Layout>);
    expect(screen.queryByText('heading test')).toBeTruthy();
});

it('breadcrumbs check', () => {
    render(
        <Layout
            breadcrumbs={{
                options: [{ title: 'test 1' }, { title: 'test 2' }]
            }}
        >
            test children
        </Layout>
    );
    expect(screen.queryByText('test 2')).toBeTruthy();
});
