import { render, screen } from '@testing-library/react';
import React from 'react';
import RadioGroup from './RadioGroup';

it('render default', () => {
    const options = [{ value: '1' }, { value: '2' }, { value: '3' }];
    const { container, getByText } = render(<RadioGroup options={options} />);
});
