import { render, screen } from '@testing-library/react';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

it('render default', () => {
    const options = [{ title: '1' }, { title: '2' }, { title: '3' }];
    const { container, getByText } = render(<Breadcrumbs options={options} />);
});
