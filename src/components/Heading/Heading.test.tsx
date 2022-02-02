import { fireEvent, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import Heading from './Heading';

it('label check', () => {
    render(<Heading children="Test heading" />);
    expect(screen.queryByText('Test heading')).toBeTruthy();
});

it('size check', () => {
    const { container } = render(<Heading children="Test heading" size="3" />);
    expect(
        getByText(container, 'Test heading').classList.contains('size-3')
    ).toBeTruthy();
});
