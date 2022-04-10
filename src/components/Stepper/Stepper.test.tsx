import { render, getByText } from '@testing-library/react';
import event from '@testing-library/user-event';
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
    });

    it('should click step', async () => {
        const mockClickStep = jest.fn();

        const { container } = render(
            <Stepper
                activeStep={1}
                steps={['Test', 'Test 2', 'Test 3']}
                onClickStep={mockClickStep}
            />
        );
        const steps = container.querySelectorAll('.step-content');
        const firstStep = steps[0];
        const secondStep = steps[1];
        const thirdStep = steps[2];

        await event.click(firstStep);
        expect(mockClickStep.mock.calls[0][0]).toBe(1);
        expect(mockClickStep.mock.calls.length).toBe(1);

        await event.click(thirdStep);
        expect(mockClickStep.mock.calls[1][0]).toBe(3);
        expect(mockClickStep.mock.calls.length).toBe(2);

        await event.click(secondStep);
        expect(mockClickStep.mock.calls[2][0]).toBe(2);
        expect(mockClickStep.mock.calls.length).toBe(3);

        await event.click(firstStep);
        expect(mockClickStep.mock.calls[3][0]).toBe(1);
        expect(mockClickStep.mock.calls.length).toBe(4);
    });
});
