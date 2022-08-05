import {
    render,
    fireEvent,
    getAllByText,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import event from '@testing-library/user-event';

import { useEffect, useState } from 'react';
import { Suggest } from './Suggest';

describe('Suggest component', () => {
    it('should be render default value', () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];
        const { getByRole, queryAllByRole, getByTestId, queryByTestId } =
            render(
                <Suggest
                    getActiveSuggestOption={(suggest, activeValue) =>
                        suggest.name === activeValue.name
                    }
                    suggestions={values}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    value={values[1]}
                />
            );

        expect(getByRole('textbox')).toHaveValue(values[1].name);
        expect(getByTestId('icon-circle-close')).toBeInTheDocument();
        expect(queryByTestId('dropped')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(1);
    });

    it('should be default state', () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];
        const { getByRole, queryAllByRole, queryByTestId } = render(
            <Suggest
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
                <Suggest
                    suggestions={values}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    value={values[1]}
                    getActiveSuggestOption={(suggest, activeValue) =>
                        suggest.name === activeValue.name
                    }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                onChange={mockOnChange}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
            />
        );

        const input = getByRole('textbox');

        await event.click(input);

        await event.click(getAllByRole('option')[1]);

        expect(mockOnChange.mock.calls[0][0]).toEqual(values[1]);
        expect(queryByTestId('dropped')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(1);
        expect(getByTestId('icon-circle-close')).toBeInTheDocument();
        expect(input).toHaveValue(values[1].name);

        await event.click(input);
        expect(getAllByRole('option').length).toBe(values.length);
        expect(getByTestId('active')).toBeInTheDocument();
    });

    it('should not be closed list if clicked input when exist active value', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];
        const { getByRole, getByTestId, getAllByRole } = render(
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                value={values[0]}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                value={values[0]}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
            />
        );

        const input = getByRole('textbox');

        await event.click(input);
        await event.click(getByText(/label/i));

        await event.type(input, '{backspace}{backspace}');
        fireEvent.keyDown(input, { keyCode: 27 });

        expect(queryAllByRole('option').length).toBe(1);
        expect(getByRole('textbox')).toHaveValue('Label');
        expect(getByTestId('icon-circle-close')).toBeInTheDocument();

        await event.type(input, 'ololo');
        fireEvent.keyDown(input, { keyCode: 27 });

        expect(queryAllByRole('option').length).toBe(1);
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                inputProps={{ disabled: true }}
                value={values[0]}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
            />
        );

        const input = getByRole('textbox');

        await event.click(input);

        expect(input).toBeDisabled();
        expect(input).toHaveValue(values[0].name);
        expect(queryByTestId('icon-circle-close')).not.toBeInTheDocument();
        expect(queryAllByRole('option').length).toBe(1);
    });

    it('should be disabled when input prop have disabled and not exist default value', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }, { name: 'Label' }];

        const { getByRole, queryAllByRole, queryByTestId } = render(
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                inputProps={{ disabled: true }}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                noSuggestMessage={message}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                onSuggestionsFetchRequested={() => fake}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
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

    it('should call onInputChange function', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];
        const mockInputChange = jest.fn();

        const { getByRole, queryAllByRole, getByTestId } = render(
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
                onInputChange={mockInputChange}
            />
        );

        expect(mockInputChange).not.toHaveBeenCalled();

        const input = getByRole('textbox');
        await event.click(input);

        expect(mockInputChange).not.toHaveBeenCalled();
        await event.type(input, 't');
        expect(mockInputChange).toHaveBeenCalledTimes(1);
        expect(mockInputChange).toHaveBeenCalledWith('t');

        await event.type(input, 'e');
        expect(mockInputChange).toHaveBeenCalledTimes(2);
        expect(mockInputChange).toHaveBeenCalledWith('te');

        fireEvent.keyDown(input, { keyCode: 27 });
        expect(mockInputChange).toHaveBeenCalledTimes(3);
        expect(mockInputChange).toHaveBeenCalledWith('');

        await event.click(input);
        await event.click(queryAllByRole('option')[0]);

        expect(mockInputChange).toHaveBeenCalledTimes(4);
        expect(mockInputChange).toHaveBeenCalledWith(values[0].name);

        await event.click(getByTestId('icon-circle-close'));
        expect(mockInputChange).toHaveBeenCalledTimes(5);
        expect(mockInputChange).toHaveBeenCalledWith('');
    });

    it('should show spinner', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const { getByRole, queryByRole } = render(
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
                isLoading={true}
            />
        );

        expect(queryByRole('progressbar')).not.toBeInTheDocument();

        const input = getByRole('textbox');
        await event.click(input);

        expect(queryByRole('progressbar')).toBeInTheDocument();
    });

    it('should load suggests data', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const sleep = (delay = 0) =>
            new Promise((resolve) => {
                setTimeout(resolve, delay);
            });

        const SuggestLoadingData = () => {
            const [isLoading, setLoading] = useState(false);
            const [suggestions, setSuggestions] = useState<typeof values>([]);

            useEffect(() => {
                async function load() {
                    setLoading(true);
                    await sleep(200);
                    setLoading(false);
                    setSuggestions(values);
                }

                load();
            }, []);

            return (
                <Suggest
                    suggestions={suggestions}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    getActiveSuggestOption={(suggest, activeValue) =>
                        suggest.name === activeValue.name
                    }
                    isLoading={isLoading}
                />
            );
        };

        const { getByRole, queryByRole, queryAllByRole } = render(
            <SuggestLoadingData />
        );

        const input = getByRole('textbox');
        await event.click(input);

        expect(queryByRole('progressbar')).toBeInTheDocument();

        await waitForElementToBeRemoved(() => queryByRole('progressbar'));

        expect(queryAllByRole('option').length).toBe(values.length);
        expect(queryByRole('progressbar')).not.toBeInTheDocument();
    });

    it('should change loading text', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const content = 'Test Suggest Wrapper';
        const { getByRole, getByText } = render(
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                isLoading={true}
                loadingText={<span>Test loading</span>}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
            />
        );

        const input = getByRole('textbox');
        await event.click(input);

        expect(getByText(/Test loading/i)).toBeInTheDocument();
    });

    it('should render status text', async () => {
        const values = [{ name: 'Test' }, { name: 'Test2' }];

        const { getByRole, getByText } = render(
            <Suggest
                suggestions={values}
                getSuggestionValue={(suggestion) => suggestion.name}
                getActiveSuggestOption={(suggest, activeValue) =>
                    suggest.name === activeValue.name
                }
                inputProps={{
                    statusText: 'Status text',
                }}
            />
        );

        expect(getByText(/Status text/i)).toBeInTheDocument();
    });
});
