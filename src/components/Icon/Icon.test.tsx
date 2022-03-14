import { render, screen } from '@testing-library/react';
import quartz from '../assets/static/quartz.svg';
import Icon from './Icon';

it('name check', () => {
    const { container } = render(<Icon name="test" size={16} />);
    expect(container.querySelector('.icon-test')).toBeTruthy();
});

it('size check', () => {
    const { container } = render(
        <Icon name="test" color="var(--color-grey-500)" size={16} />
    );
    expect(
        container.querySelector('.icon-test')?.getAttribute('height')
    ).toEqual('16');
});

it('color check', () => {
    const { container } = render(
        <Icon name="test" color="var(--color-grey-500)" size={16} />
    );
    expect(container.querySelector('.icon-test')?.getAttribute('fill')).toEqual(
        'var(--color-grey-500)'
    );
});

it('file prop check', () => {
    render(
        <Icon
            name="test"
            color="var(--color-grey-500)"
            size={16}
            file={quartz}
        />
    );
    expect(screen.getByRole('img').getAttribute('src')).toEqual(
        'test-file-stub'
    );
});
