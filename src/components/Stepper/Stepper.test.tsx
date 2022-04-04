import { render, getByText } from '@testing-library/react';
import Stepper from './Stepper';

describe('Stepper component', () => {
    it('should correct render text', () => {
        const { getByText } = render(
            <Stepper activeStep={1} steps={['Test', 'Test 2']} />
        );
        expect(getByText(/^test$/i)).toBeInTheDocument();
        expect(getByText(/^test 2$/i)).toBeInTheDocument();
    });

    it('should render items', () => {
        const steps = ['Test', 'Test 2', 'Test 3'];
        const { container } = render(<Stepper activeStep={1} steps={steps} />);
        expect(container.querySelectorAll('.step-item').length).toBe(
            steps.length
        );
    });

    it('should render correct class', () => {
        const steps = ['Test', 'Test 2', 'Test 3'];
        const { container } = render(<Stepper activeStep={1} steps={steps} />);
        expect(container.querySelectorAll('.step-item')[0]).toHaveClass(
            'active'
        );
        expect(container.querySelectorAll('.active').length).toBe(1);
        expect(container.querySelectorAll('.inactive').length).toBe(
            steps.length - 1
        );
    });
});
