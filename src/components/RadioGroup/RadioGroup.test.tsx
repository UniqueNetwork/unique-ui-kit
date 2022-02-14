import { fireEvent, render, screen } from '@testing-library/react';
import RadioGroup from './RadioGroup';

const options = [{ value: '1' }, { value: '2' }, { value: '3' }];
const mockFunction = jest.fn();

it('options prop check', () => {
    render(<RadioGroup options={options} onChange={mockFunction} />);
    expect(screen.getAllByRole('radio')).toHaveLength(3);
});

it('size prop check', () => {
    const { container } = render(
        <RadioGroup options={options} onChange={mockFunction} size="m" />
    );
    expect(container.querySelectorAll('.radio-size-m')).toHaveLength(3);
});

it('align prop check', () => {
    const { container } = render(
        <RadioGroup
            options={options}
            onChange={mockFunction}
            align="horizontal"
        />
    );
    expect(container.querySelector('.horizontal')).toBeTruthy();
});

it('click check', () => {
    render(<RadioGroup options={options} onChange={mockFunction} size="m" />);
    const radios = screen.getAllByRole('radio') as HTMLInputElement[];
    expect(radios[1].checked).toBeFalsy();
    fireEvent.click(radios[1]);
    expect(radios[1].checked).toBeTruthy();
});
