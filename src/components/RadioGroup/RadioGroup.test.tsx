import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioOptionValueType } from './RadioGroup';

const options: RadioOptionValueType[] = [
    { value: '1', label: 'label 1' },
    { value: '2', label: 'label 2' },
    { value: '3', label: 'label 3' },
];

describe('RadioGroup component', () => {
    it('should render list', () => {
        const { getAllByRole } = render(<RadioGroup options={options} />);
        expect(getAllByRole('radio', { hidden: true })).toHaveLength(
            options.length
        );
    });

    it('should not render list', () => {
        const { queryAllByRole } = render(<RadioGroup options={[]} />);
        expect(queryAllByRole('radio')).toHaveLength(0);
    });

    it('should be selected first item default value', () => {
        const { getAllByRole } = render(<RadioGroup options={options} />);

        const items = getAllByRole('radio', { hidden: true });
        expect(items[0]).toBeChecked();
    });

    it('user default value must be selected', () => {
        const { getAllByRole } = render(
            <RadioGroup options={options} defaultValue={'2'} />
        );

        const items = getAllByRole('radio', { hidden: true });
        expect(items[1]).toBeChecked();
    });

    it('default value should be chosen if the default value is empty', () => {
        const { getAllByRole } = render(
            <RadioGroup options={options} defaultValue={''} />
        );

        const items = getAllByRole('radio', { hidden: true });
        expect(items[0]).toBeChecked();
    });

    it('should be change value', async () => {
        const { getAllByRole } = render(
            <RadioGroup options={options} defaultValue={'1'} />
        );

        const items = getAllByRole('radio', { hidden: true });
        await userEvent.click(items[1]);

        expect(items[1]).toBeChecked();
        expect(items[0]).not.toBeChecked();
    });

    it('should be call onChange when default value is set', async () => {
        const mockChange = jest.fn();
        const { getAllByRole } = render(
            <RadioGroup
                options={options}
                defaultValue={'1'}
                onChange={mockChange}
            />
        );

        const items = getAllByRole('radio', { hidden: true });
        await userEvent.click(items[1]);

        expect(mockChange).toHaveBeenCalled();
    });

    it('should be call onChange when default value is not set', async () => {
        const mockChange = jest.fn();
        const { getAllByRole } = render(
            <RadioGroup options={options} onChange={mockChange} />
        );

        const items = getAllByRole('radio', { hidden: true });
        await userEvent.click(items[1]);

        expect(mockChange).toHaveBeenCalled();
    });

    it('when a value is set and there is no onChange, the value must be saved', async () => {
        const { getAllByRole } = render(
            <RadioGroup options={options} value={'2'} />
        );

        const items = getAllByRole('radio', { hidden: true });
        await userEvent.click(items[0]);

        expect(items[1]).toBeChecked();
    });

    it('should be disabled value', async () => {
        const mockChange = jest.fn();
        const { getAllByRole } = render(
            <RadioGroup
                options={[
                    { value: '1', label: '1', disabled: true },
                    { value: '2', label: '2', disabled: true },
                ]}
                value={'2'}
                onChange={mockChange}
            />
        );

        const items = getAllByRole('radio', { hidden: true });

        expect(items[0]).toBeDisabled();
        expect(items[1]).toBeDisabled();

        await userEvent.click(items[0]);
        await userEvent.click(items[1]);

        expect(mockChange).not.toHaveBeenCalled();
    });

    it('should change value', async () => {
        const Component = () => {
            const [value, setValue] = useState('1');
            return (
                <RadioGroup
                    options={options}
                    value={value}
                    onChange={({ value }) => setValue(value)}
                />
            );
        };

        const { getAllByRole } = render(<Component />);

        const items = getAllByRole('radio', { hidden: true });

        await userEvent.click(items[1]);
        expect(items[1]).toBeChecked();

        await userEvent.click(items[2]);
        expect(items[2]).toBeChecked();

        await userEvent.click(items[0]);
        expect(items[0]).toBeChecked();
    });

    it('should be default align', async () => {
        const { container } = render(
            <RadioGroup options={options} value={'2'} />
        );

        expect(container.firstChild).toHaveClass('vertical');
    });

    it('should be set align', async () => {
        const { container } = render(
            <RadioGroup options={options} value={'2'} align={'horizontal'} />
        );

        expect(container.firstChild).toHaveClass('horizontal');
    });
});
