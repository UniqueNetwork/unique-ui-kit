import { fireEvent, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import Checkbox from './Checkbox';

it('label check', () => {
    render(
        <Checkbox
            label="test label"
            checked={false}
            onChange={() => {
                console.log('change checkbox');
            }}
        />
    );
    expect(screen.queryByText('test label')).toBeTruthy();
});

it('size check', () => {
    const { container } = render(
        <Checkbox
            label="test label"
            checked={true}
            size={'m'}
            onChange={() => {
                console.log('change checkbox');
            }}
        />
    );

    const checkbox = container.querySelector('.unique-checkbox-wrapper');
    const icon = container.querySelector('.icon');

    if (checkbox) {
        expect(checkbox.classList.contains('checkbox-size-m')).toBeTruthy();
        expect(icon?.getAttribute('height')).toEqual('18');
    }
});

it('onChange check', () => {
    const onChange = jest.fn();
    render(
        <Checkbox
            label="test label"
            checked={false}
            size={'s'}
            onChange={onChange}
        />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalled();
});

it('disabled check', () => {
    render(
        <Checkbox
            label="test label"
            disabled
            checked={false}
            size={'s'}
            onChange={() => {
                console.log('change checkbox');
            }}
        />
    );
    expect(screen.getByRole('checkbox')).toHaveProperty('disabled');
});

it('prop checked check', () => {
    const { container } = render(
        <Checkbox
            label="test label"
            disabled
            checked={true}
            size={'s'}
            onChange={() => {
                console.log('change checkbox');
            }}
        />
    );
    expect(container.querySelector('.checked')).toBeTruthy();
});
