import { fireEvent, render, screen } from '@testing-library/react';
import InputText from './InputText';

const mockFunction = jest.fn();

it('label check', () => {
    render(<InputText label="test label" onChange={mockFunction} />);
    expect(screen.queryByText('test label')).toBeTruthy();
});

it('additionalText check', () => {
    render(
        <InputText
            additionalText="test additionalText"
            onChange={mockFunction}
        />
    );
    expect(screen.queryByText('test additionalText')).toBeTruthy();
});

it('icon check', () => {
    const { container } = render(
        <InputText
            iconLeft={{ name: 'magnify', size: 18, color: '#7d90a1' }}
            iconRight={{ name: 'magnify', size: 18, color: '#7d90a1' }}
            onChange={mockFunction}
        />
    );
    expect(container.getElementsByClassName('icon-magnify')).toBeDefined();
});

it('status check', () => {
    render(<InputText statusText="status test" onChange={mockFunction} />);
    expect(screen.queryByText('status test')).toBeTruthy();
});

it('value check', () => {
    render(
        <InputText
            label="test label"
            value="test value"
            onChange={mockFunction}
        />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toEqual('test value');
});

it('onChange check', () => {
<<<<<<< HEAD
    const mockOnChange = jest.fn();
    render(<InputText label="test label" onChange={mockOnChange} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(mockOnChange.mock.calls[0][0]).toEqual('test value');
=======
    render(<InputText label="test label" onChange={mockFunction} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(mockFunction.mock.calls[0][0]).toEqual('test value');
>>>>>>> 1f7e37dcb1fd47ea5ee9c3f8d4f9be7016e7e9fa
});
