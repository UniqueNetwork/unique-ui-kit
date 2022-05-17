import { Loader } from './Loader';
import { render } from '@testing-library/react';

describe('Loader component', () => {
    it('should render component', () => {
        const { getByRole } = render(<Loader />);
        expect(getByRole('progressbar')).toBeInTheDocument();
    });

    it('should render label', () => {
        const { getByText } = render(<Loader label={'Test label'} />);
        expect(getByText(/test label/i)).toBeInTheDocument();
    });

    it('should not render label', () => {
        const { queryByTestId } = render(<Loader label={null} />);
        expect(queryByTestId('loader-label')).not.toBeInTheDocument();
    });
});
