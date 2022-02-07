import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputText from './InputText';

it('label check', () => {
    render(
        <InputText
            label="test label"
            onChange={() => {
                console.log('input change');
            }}
        />
    );
    expect(screen.queryByText('test label')).toBeTruthy();
});

it('additionalText check', () => {
    render(
        <InputText
            additionalText="test additionalText"
            onChange={() => {
                console.log('input change');
            }}
        />
    );
    expect(screen.queryByText('test additionalText')).toBeTruthy();
});

it('icon check', () => {
    const { container } = render(
        <InputText
            iconLeft={{ name: 'magnify', size: 18, color: '#7d90a1' }}
            iconRight={{ name: 'magnify', size: 18, color: '#7d90a1' }}
            onChange={() => {
                console.log('input change');
            }}
        />
    );
    expect(container.getElementsByClassName('icon-magnify')).toBeDefined();
});

it('status check', () => {
    const { container } = render(
        <InputText
            statusText="status test"
            onChange={() => {
                console.log('input change');
            }}
        />
    );
    expect(screen.queryByText('status test')).toBeTruthy();
});

it('default value check', () => {
    render(
        <InputText
            label="test label"
            defaultValue="test value"
            onChange={() => {
                console.log('input change');
            }}
        />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toEqual('test value');
});

it('value check', () => {
    render(
        <InputText
            label="test label"
            value="test value"
            onChange={() => {
                console.log('input change');
            }}
        />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toEqual('test value');
});

it('onChange check', () => {
    render(
        <InputText
            label="test label"
            onChange={() => {
                console.log('input change');
            }}
        />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(input.value).toBe('test value');
});
