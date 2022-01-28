import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

it('render default', () => {
    const options = [
        { title: 'test 1' },
        { title: 'test 2' },
        { title: 'test 3' }
    ];
    render(<Breadcrumbs options={options} />);
    options.forEach((option) => {
        expect(screen.queryByText(option.title)).toBeTruthy();
    });
});

it('render with links', () => {
    const options = [
        { title: 'test 1', link: '/localhost' },
        { title: 'test 2' },
        { title: 'test 3' }
    ];
    render(<Breadcrumbs options={options} />);
    options.forEach((option) => {
        if (option.link) {
            expect(screen.getByText('test 1').getAttribute('href')).toBe(
                '/localhost'
            );
        }
    });
});

it('render icon check', () => {
    const options = [
        { title: 'test 1' },
        { title: 'test 2' },
        { title: 'test 3' }
    ];
    const { container } = render(<Breadcrumbs options={options} />);
    expect(container.querySelector('#root > div > svg')).toBeDefined();
});

it('render lenght check', () => {
    const options = [
        { title: 'test 1' },
        { title: 'test 2' },
        { title: 'test 3' }
    ];
    render(<Breadcrumbs options={options} />);
    const { container } = render(<Breadcrumbs options={options} />);
    expect(container.querySelectorAll('.breadcrumb-item')).toHaveLength(3);
});
