import { render, fireEvent } from '@testing-library/react';
import Toggle from './Toggle';

const mockOnChange = jest.fn();

it('checks size prop', () => {
    render(
        <Toggle size={'m'} on={false} label={'label'} onChange={mockOnChange} />
    );
});

it('checks onChange method', () => {
    const { getByText } = render(
        <Toggle on={false} label={'label'} onChange={mockOnChange} />
    );
    const toggle = getByText(/label/i);
    fireEvent.click(toggle);
});
