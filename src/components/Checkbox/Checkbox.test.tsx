import { fireEvent, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import Checkbox from './Checkbox';

it('label check', () => {
    render(
        <Checkbox
            label="test label"
            checked={false}
            size={'s'}
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
            checked={false}
            size={'s'}
            onChange={() => {
                console.log('change checkbox');
            }}
        />
    );
    expect(
        container
            .querySelector('.unique-checkbox-wrapper')
            ?.classList.contains('checkbox-size-s')
    ).toBeTruthy();
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
    const { container } = render(
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
