import { fireEvent, render, screen } from '@testing-library/react';
import { Textarea } from './Textarea';

const mockFunction = jest.fn();

describe('Textarea Component', () => {
    it('label check', () => {
        render(<Textarea label="test label" onChange={mockFunction} />);
        expect(screen.queryByText('test label')).toBeTruthy();
    });

    it('additionalText check', () => {
        render(
            <Textarea
                additionalText="test additionalText"
                onChange={mockFunction}
            />
        );
        expect(screen.queryByText('test additionalText')).toBeTruthy();
    });

    it('status check', () => {
        render(<Textarea statusText="status test" onChange={mockFunction} />);
        expect(screen.queryByText('status test')).toBeTruthy();
    });

    it('value check', () => {
        render(
            <Textarea
                label="test label"
                value="test value"
                onChange={mockFunction}
            />
        );

        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input.value).toEqual('test value');
    });

    it('onChange check', () => {
        render(<Textarea label="test label" onChange={mockFunction} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'test value' } });
        expect(mockFunction.mock.calls[0][0]).toEqual('test value');
    });

    it('rows check', () => {
        render(
            <Textarea label="test label" rows={3} onChange={mockFunction} />
        );
        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.type).not.toBe('text');
        expect(textarea.rows).toBe(3);
    });
});
