import { render, fireEvent, screen } from '@testing-library/react';
import { Tabs } from '..';

const mockOnClick = jest.fn();

it('checks children prop', () => {
    render(
        <Tabs activeIndex={0}>
            <div>test children</div>
            <div>test children 2</div>
        </Tabs>
    );
    expect(screen.queryByText('test children')).toBeTruthy();
});

it('checks without children prop', () => {
    render(<Tabs activeIndex={0} />);
});

it('checks onClick method', () => {
    render(
        <Tabs
            labels={['Label 1', 'Label 2']}
            activeIndex={0}
            onClick={mockOnClick}
        />
    );
    const labels = screen.getAllByText(/label/i);
    fireEvent.click(labels[0]);
    expect(mockOnClick).toHaveBeenCalled();
});

it('checks without onClick method', () => {
    render(<Tabs labels={['Label 1', 'Label 2']} activeIndex={0} />);
    const labels = screen.getAllByText(/label/i);
    fireEvent.click(labels[0]);
    expect(mockOnClick).toHaveBeenCalled();
});

it('checks disabled prop', () => {
    render(
        <Tabs
            labels={['Label 1', 'Label 2']}
            activeIndex={0}
            disabledIndexes={[1]}
        />
    );
    const labels = screen.getAllByText(/label/i);
    expect(labels[0].classList.contains('disabled')).toBe(false);
    expect(labels[1].classList.contains('disabled')).toBe(true);
});
