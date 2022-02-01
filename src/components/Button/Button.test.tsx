import { fireEvent, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

it('text check', () => {
    const options = {
        title: 'button text',
        onClick: () => {
            console.log('button click');
        }
    };
    render(<Button {...options} />);
    expect(screen.queryByText(options.title)).toBeTruthy();
});

it('click check', () => {
    const onClick = jest.fn();
    const { container } = render(
        <Button onClick={onClick} title="button text" />
    );
    fireEvent.click(getByText(container, 'button text'));
    expect(onClick).toHaveBeenCalled();
});

it('role check', () => {
    const { container } = render(
        <Button onClick={() => {}} title="button text" role="tertiary" />
    );
    expect(
        getByText(container, 'button text').classList.contains('tertiary')
    ).toBeTruthy();
});

it('size check', () => {
    const { container } = render(
        <Button onClick={() => {}} title="button text" size="s" />
    );
    expect(
        getByText(container, 'button text').classList.contains('size-s')
    ).toBeTruthy();
});

it('icon check', () => {
    const { container } = render(
        <Button
            onClick={() => {}}
            title="button text"
            iconLeft={{ name: 'arrow-left', size: 12, color: '#fff' }}
        />
    );
    expect(container.querySelector('#root > div > button > svg')).toBeDefined();
});

it('wide check', () => {
    const { container } = render(
        <Button onClick={() => {}} title="button text" wide />
    );
    expect(
        getByText(container, 'button text').classList.contains('wide')
    ).toBeTruthy();
});

it('disabled check', () => {
    const options = {
        title: 'button text',
        disabled: true,
        onClick: () => {
            console.log('button click');
        }
    };
    render(<Button {...options} />);
    expect(screen.queryByRole('button')).toHaveProperty('disabled');
});
