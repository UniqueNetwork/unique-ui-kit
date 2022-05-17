import { render } from '@testing-library/react';
import { Upload } from './Upload';

it('default prop', () => {
    render(<Upload type="square" />);
});
