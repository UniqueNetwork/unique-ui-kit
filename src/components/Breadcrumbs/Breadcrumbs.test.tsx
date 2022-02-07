import { render, screen } from '@testing-library/react';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

it('lenght check', () => {
    const options = [
        { title: 'test 1' },
        { title: 'test 2' },
        { title: 'test 3' }
    ];
    render(<Breadcrumbs options={options} />);
    const { container } = render(<Breadcrumbs options={options} />);
    expect(container.querySelectorAll('.breadcrumb-item')).toHaveLength(3);
});
