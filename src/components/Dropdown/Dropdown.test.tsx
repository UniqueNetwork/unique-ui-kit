import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button, Dropdown } from '../index';

const mockFunction = jest.fn();
const options = [
    {
        id: 1,
        title: 'test title 1',
        iconRight: {
            name: 'arrow-up',
            size: 12,
            color: 'var(--color-blue-grey-300)',
        },
    },
    {
        id: 2,
        title: 'test title 2',
        iconLeft: {
            name: 'arrow-up',
            size: 12,
            color: 'var(--color-blue-grey-300)',
        },
    },
    { id: 3, title: 'test title 3' },
    { id: 4, title: 'test title 4' },
    { id: 5, title: 'test title 5' },
];

it('it should open dropdown on click by wrapper and close on click outside', () => {
    const { queryByRole, getByTestId } = render(
        <Dropdown options={options} onChange={mockFunction} id={'dropdown'}>
            <Button title={'Dropdown'} />
        </Dropdown>
    );
    const dropdown = getByTestId('dropdown-wrapper');
    fireEvent.mouseEnter(dropdown);
    fireEvent.mouseDown(dropdown);
    const dropdownOptions = queryByRole('listbox');
    expect(dropdownOptions).toBeInTheDocument();

    fireEvent.mouseLeave(dropdown);
    fireEvent.mouseDown(document.body);
    expect(dropdownOptions).not.toBeInTheDocument();
});

it('it should call onChange on click by option', () => {
    const { getByTestId, getByText } = render(
        <Dropdown options={options} onChange={mockFunction}>
            <Button title={'Dropdown'} />
        </Dropdown>
    );
    const dropdownWrapper = getByTestId('dropdown-wrapper');
    fireEvent.mouseDown(dropdownWrapper);
    const option = getByText('test title 3');
    fireEvent.click(option);
    expect(mockFunction.mock.calls.length).toBe(1);
    expect(mockFunction).toHaveBeenCalledWith(options[2]);
});
