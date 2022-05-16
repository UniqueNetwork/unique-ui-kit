import { render } from '@testing-library/react';
import Text from './Text';

it('checks children prop', () => {
    render(<Text>Test</Text>);
});

it('checks size prop', () => {
    render(<Text size="s">Test</Text>);
});

it('checks color prop', () => {
    render(<Text color="primary-500">Test</Text>);
});

it('checks weight prop', () => {
    render(<Text weight="regular">Test</Text>);
});
