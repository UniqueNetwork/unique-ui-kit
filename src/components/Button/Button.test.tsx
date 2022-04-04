import { getByText, render } from '@testing-library/react';
import Button from './Button';

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
        <Button onClick={() => {}} title="button text" size="small" />
    );
    expect(
        getByText(container, 'button text').classList.contains('size-small')
    ).toBeTruthy();
});

it('icon check', () => {
    const { container } = render(
        <Button
            onClick={() => {}}
            title="button text"
            iconLeft={{
                name: 'arrow-left',
                size: 12,
                color: 'var(--color-grey-500)'
            }}
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
