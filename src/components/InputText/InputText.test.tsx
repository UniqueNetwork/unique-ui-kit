import { fireEvent, render, screen } from '@testing-library/react';
import InputText from './InputText';
import { Icon } from '../';

const mockFunction = jest.fn();

describe('InputText Component', () => {
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

    it('should be render icons', () => {
        const { getByTestId } = render(
            <InputText
                iconLeft={{
                    name: 'magnify',
                    size: 18,
                    color: 'var(--color-blue-grey-300)',
                }}
                iconRight={{
                    name: 'close',
                    size: 18,
                    color: 'var(--color-blue-grey-300)',
                }}
                onChange={mockFunction}
            />
        );
        expect(getByTestId('icon-close')).toBeInTheDocument();
        expect(getByTestId('icon-magnify')).toBeInTheDocument();
    });

    it('status check', () => {
        render(<InputText statusText="status test" onChange={mockFunction} />);
        expect(screen.queryByText('status test')).toBeTruthy();
    });

    it('size check', () => {
        const { container } = render(
            <InputText size="small" onChange={mockFunction} />
        );
        expect(
            container.querySelector('.unique-input-text.size-small')
        ).toBeInTheDocument();
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
        render(<InputText label="test label" onChange={mockFunction} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'test value' } });
        expect(mockFunction.mock.calls[0][0]).toEqual('test value');
    });

    it('should render react node icons right', () => {
        const { getByTestId } = render(
            <InputText
                label="test label"
                onChange={mockFunction}
                iconRight={
                    <>
                        <Icon size={10} name={'burn'} />
                        <Icon size={10} name={'close'} />
                    </>
                }
            />
        );
        expect(getByTestId('icon-burn')).toBeInTheDocument();
        expect(getByTestId('icon-close')).toBeInTheDocument();
    });

    it('should render react node icons left', () => {
        const { getByTestId } = render(
            <InputText
                label="test label"
                onChange={mockFunction}
                iconLeft={
                    <>
                        <Icon size={10} name={'burn'} />
                        <Icon size={10} name={'close'} />
                    </>
                }
            />
        );
        expect(getByTestId('icon-burn')).toBeInTheDocument();
        expect(getByTestId('icon-close')).toBeInTheDocument();
    });
});
