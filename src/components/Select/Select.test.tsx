import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';

const mockFunction = jest.fn();
const options = [
    {
        id: 1,
        title: 'test title 1',
        iconRight: { name: 'arrow-up', size: 12, color: '#81858E' }
    },
    {
        id: 2,
        title: 'test title 2',
        iconLeft: { name: 'arrow-up', size: 12, color: '#81858E' }
    },
    { id: 3, title: 'test title 3' },
    { id: 4, title: 'test title 4' },
    { id: 5, title: 'test title 5' }
];

it('options prop check', () => {
    render(
        <Select
            options={options}
            tabIndex={4}
            defaultValue={options[0].title}
            onChange={mockFunction}
        />
    );
});

it('additionalText prop check', () => {
    render(
        <Select
            options={options}
            additionalText="additional text test"
            onChange={mockFunction}
        />
    );
    expect(screen.getByText('additional text test')).toBeTruthy();
});

it('label prop check', () => {
    render(
        <Select
            options={options}
            label="label text test"
            onChange={mockFunction}
        />
    );
    expect(screen.getByText('label text test')).toBeTruthy();
});

it('status prop check', () => {
    render(
        <Select
            options={options}
            statusText="status text test"
            onChange={mockFunction}
        />
    );
    expect(screen.getByText('status text test')).toBeTruthy();
});

it('status prop check', () => {
    render(
        <Select
            options={options}
            placeholder="placeholder text test"
            onChange={mockFunction}
        />
    );
    expect(screen.getByText('placeholder text test')).toBeTruthy();
});

it('defaultValue prop check', () => {
    render(
        <Select
            options={options}
            defaultValue={options[0].id}
            placeholder="placeholder text test"
            onChange={mockFunction}
        />
    );
    expect(screen.getByText('placeholder text test')).toBeTruthy();
});

it('mouse event check', async () => {
    const { container } = render(
        <Select
            options={options}
            label="test label"
            value={options[0].id}
            onChange={mockFunction}
        />
    );
    const selectWarpper = container.querySelector('.select-wrapper');
    const selectValue = container.querySelector('.select-value');
    fireEvent.mouseEnter(selectWarpper!);
    fireEvent.mouseLeave(selectWarpper!);
    fireEvent.mouseDown(document.body);
    fireEvent.mouseDown(selectValue!);
});

it('click option check', async () => {
    const { container } = render(
        <Select
            options={options}
            label="test label"
            value={options[0].id}
            onChange={mockFunction}
        />
    );
    const selectValue = container.querySelector('.select-value');
    fireEvent.mouseDown(selectValue!);
    await screen.findByText('test title 3').then((option) => {
        fireEvent.click(option);
    });
});
