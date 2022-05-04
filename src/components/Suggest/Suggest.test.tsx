import { render, fireEvent, getAllByText } from '@testing-library/react';
import event from '@testing-library/user-event';

import Suggest, { SuggestProps } from './Suggest';
import { useState } from 'react';

type InputProps<T> = Partial<SuggestProps<T>['inputProps']>;

const WrapperSuggest = <T,>({
    inputProps,
    ...props
}: Omit<SuggestProps<T>, 'inputProps'> & { inputProps?: InputProps<T> }) => {
    const [value, setValue] = useState('');
    return (
        <Suggest
            {...props}
            inputProps={{
                value,
                onChange: setValue,
                ...inputProps,
            }}
        />
    );
};

describe('Suggest component', () => {
    it('should be render default value', () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];
        const { getByRole, queryAllByRole, getByTestId, queryByTestId } =
            render(
                <WrapperSuggest
                    suggestions={values}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    defaultValue={values[1]}
                />
            );

        expect(getByRole('textbox')).toHaveValue(values[1].name);
        expect(getByTestId('icon-circle-close')).toBeInTheDocument();
        expect(queryByTestId('dropped')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(0);
    });

    it('should be default state', () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];
        const { getByRole, queryAllByRole, queryByTestId } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
            />
        );

        expect(getByRole('textbox')).toHaveValue('');
        expect(queryByTestId('icon-circle-close')).not.toBeInTheDocument();
        expect(queryByTestId('dropped')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(0);
    });

    it('should be delete default value', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];
        const { getByRole, queryAllByRole, queryByTestId, getByTestId } =
            render(
                <WrapperSuggest
                    suggestions={values}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    defaultValue={values[1]}
                />
            );

        const clearIcon = getByTestId('icon-circle-close');

        await event.click(clearIcon);

        expect(getByRole('textbox')).toHaveValue('');
        expect(queryByTestId('dropped')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(0);
        expect(clearIcon).not.toBeInTheDocument();

        await event.click(getByRole('textbox'));

        expect(queryByTestId('active')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(values.length);
    });

    it('should be open list on click input and close when click input again', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];
        const {
            getByRole,
            getAllByRole,
            queryAllByRole,
            queryByTestId,
            getByTestId,
        } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);

        expect(getByTestId('dropped')).toBeInTheDocument();
        expect(getAllByRole('option').length).toBe(values.length);
        expect(queryByTestId('icon-circle-close')).not.toBeInTheDocument();
        expect(input).toHaveValue('');

        await event.click(input);

        expect(queryByTestId('dropped')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(0);
        expect(queryByTestId('icon-circle-close')).not.toBeInTheDocument();
        expect(input).toHaveValue('');
    });

    it('should be selected value on click', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];
        const mockOnChange = jest.fn();
        const {
            getByRole,
            getAllByRole,
            queryAllByRole,
            getByTestId,
            queryByTestId,
        } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                onChange={mockOnChange}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);

        await event.click(getAllByRole('option')[1]);

        expect(mockOnChange.mock.calls[0][0]).toEqual(values[1]);
        expect(queryByTestId('dropped')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(0);
        expect(getByTestId('icon-circle-close')).toBeInTheDocument();
        expect(input).toHaveValue(values[1].name);

        await event.click(input);
        expect(getAllByRole('option').length).toBe(values.length);
        expect(getByTestId('active')).toBeInTheDocument();
    });

    it('should not be closed list if clicked input when exist active value', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];
        const { getByRole, getByTestId, getAllByRole } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                defaultValue={values[0]}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);
        expect(getByTestId('active')).toBeInTheDocument();

        await event.click(input);
        expect(getAllByRole('option').length).toBe(values.length);

        await event.click(input);
        expect(getAllByRole('option').length).toBe(values.length);
    });

    it('should be start filtered values', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];
        const { getByRole, getAllByRole } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);
        await event.type(input, 'Test');

        expect(getAllByRole('option').length).toBe(2);

        await event.type(input, '2');

        expect(getAllByRole('option').length).toBe(1);
    });

    it('should not be found values', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];
        const { getByRole, getByText, queryAllByRole } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);
        await event.type(input, 'trololo');

        expect(queryAllByRole('option').length).toBe(0);
        expect(getByText(/no results/i)).toBeInTheDocument();

        fireEvent.keyDown(input, { keyCode: 27 });
        expect(input).toHaveValue('');
        await event.click(input);
        expect(queryAllByRole('option').length).toBe(values.length);
    });

    it('should be filtered values when exist default value', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];
        const { getByRole, getAllByRole } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                defaultValue={values[0]}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);
        await event.type(input, '2');

        expect(getAllByRole('option').length).toBe(1);
    });

    it('should return selected value when remove not all symbol', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];

        const { getByRole, getByText, queryAllByRole, getByTestId } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);
        await event.click(getByText(/label/i));

        await event.type(input, '{backspace}{backspace}');
        fireEvent.keyDown(input, { keyCode: 27 });

        expect(queryAllByRole('option').length).toBe(0);
        expect(getByRole('textbox')).toHaveValue('Label');
        expect(getByTestId('icon-circle-close')).toBeInTheDocument();

        await event.type(input, 'ololo');
        fireEvent.keyDown(input, { keyCode: 27 });

        expect(queryAllByRole('option').length).toBe(0);
        expect(getByRole('textbox')).toHaveValue('Label');
        expect(getByTestId('icon-circle-close')).toBeInTheDocument();
    });

    it('should return empty value when removed all symbol', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];

        const {
            getByRole,
            getByText,
            queryAllByRole,
            getAllByRole,
            queryByTestId,
        } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);
        await event.click(getByText(/label/i));

        await event.clear(input);
        fireEvent.keyDown(input, { keyCode: 27 });

        expect(queryAllByRole('option').length).toBe(0);
        expect(getByRole('textbox')).toHaveValue('');
        expect(queryByTestId('icon-circle-close')).not.toBeInTheDocument();

        await event.click(input);

        expect(getAllByRole('option').length).toBe(values.length);
        expect(getByRole('textbox')).toHaveValue('');
        expect(queryByTestId('icon-circle-close')).not.toBeInTheDocument();
    });

    it('should be disabled when input prop have disabled and exist default value', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];

        const { getByRole, queryAllByRole, queryByTestId } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                inputProps={{ disabled: true }}
                defaultValue={values[0]}
            />
        );

        const input = getByRole('textbox');

        await event.click(input);

        expect(input).toBeDisabled();
        expect(input).toHaveValue(values[0].name);
        expect(queryByTestId('icon-circle-close')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(0);
    });

    it('should be disabled when input prop have disabled and not exist default value', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];

        const { getByRole, queryAllByRole, queryByTestId } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                inputProps={{ disabled: true }}
            />
        );

        const input = getByRole('textbox');
        await event.click(input);

        expect(input).toBeDisabled();
        expect(input).toHaveValue('');
        expect(queryByTestId('icon-circle-close')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(0);
    });

    it('should be change suggest message when not found', async () => {
        const values = [{ name: 'Test' }];
        const message = 'Test message';
        const { getByRole, getByText, getAllByRole, queryByText } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                noSuggestMessage={message}
            />
        );

        const input = getByRole('textbox');
        await event.click(input);
        await event.type(input, 'qwe');

        expect(getByText(message)).toBeInTheDocument();

        fireEvent.keyDown(input, { keyCode: 27 });
        await event.click(input);

        expect(getAllByRole('option').length).toBe(values.length);
        expect(queryByText(message)).not.toBeInTheDocument();
    });

    it('should be custom suggestions fetch requested', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const fake = [{ name: 'Trololo' }];

        const { getByRole, getAllByRole, getByText, getAllByText } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                onSuggestionsFetchRequested={() => fake}
            />
        );

        const input = getByRole('textbox');
        await event.click(input);

        expect(getAllByRole('option').length).toBe(values.length);

        await event.type(input, 'qwe');
        expect(getAllByRole('option').length).toBe(fake.length);
        expect(getByText('Trololo')).toBeInTheDocument();

        await event.clear(input);
        expect(getAllByRole('option').length).toBe(fake.length);
        expect(getByText('Trololo')).toBeInTheDocument();

        fireEvent.keyDown(input, { keyCode: 27 });
        await event.click(input);
        expect(getAllByRole('option').length).toBe(values.length);
        expect(getAllByText(/test/i).length).toBe(values.length);
    });

    it('should render custom SuggestEmpty component', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const { getByRole, getAllByRole, getByTestId, queryByTestId } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                components={{
                    SuggestEmpty: () => (
                        <div data-testid={'empty'}>
                            <p>Not</p>
                            <p>Found</p>
                        </div>
                    ),
                }}
            />
        );

        const input = getByRole('textbox');
        await event.click(input);
        await event.type(input, 'qwe');

        expect(getByTestId('empty')).toBeInTheDocument();

        fireEvent.keyDown(input, { keyCode: 27 });
        await event.click(input);

        expect(getAllByRole('option').length).toBe(values.length);
        expect(queryByTestId('empty')).not.toBeInTheDocument();
    });

    it('should render custom SuggestItem component', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const { getByRole, queryAllByTestId } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                components={{
                    SuggestItem: () => (
                        <div data-testid={'item'}>
                            <p>Lorem</p>
                        </div>
                    ),
                }}
            />
        );

        const input = getByRole('textbox');
        await event.click(input);

        expect(queryAllByTestId('item').length).toBe(values.length);
    });

    it('should render custom SuggestWrapper component', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const content = 'Test Suggest Wrapper';
        const { getByRole, queryAllByTestId, getByText } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                components={{
                    SuggestWrapper: () => <div>{content}</div>,
                }}
            />
        );

        const input = getByRole('textbox');
        await event.click(input);

        expect(queryAllByTestId('item').length).toBe(0);
        expect(getByText(content)).toBeInTheDocument();
    });

    it('should render custom SuggestList component', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const content = 'Test Suggest Wrapper';
        const { getByRole, queryAllByTestId, getByText } = render(
            <WrapperSuggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                components={{
                    SuggestList: () => <div>{content}</div>,
                }}
            />
        );

        const input = getByRole('textbox');
        await event.click(input);

        expect(queryAllByTestId('item').length).toBe(0);
        expect(getByText(content)).toBeInTheDocument();
    });
});
