import { render } from '@testing-library/react';
import Link from './Link';

it('checks role prop', () => {
    render(<Link title="primary text" role="secondary" />);
});

it('checks without role prop', () => {
    render(<Link title="primary text" />);
});
