import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
    it('label check', () => {
        render(
            <Checkbox
                label="test label"
                checked={false}
                onChange={() => {
                    console.log('change checkbox');
                }}
            />
        );
        expect(screen.queryByText('test label')).toBeTruthy();
    });

    it('size check', () => {
        const { container } = render(
            <Checkbox
                label="test label"
                checked={true}
                size={'m'}
                onChange={() => {
                    console.log('change checkbox');
                }}
            />
        );

        const checkbox = container.querySelector('.unique-checkbox-wrapper');
        const icon = container.querySelector('.icon');

        if (checkbox) {
            expect(checkbox.classList.contains('checkbox-size-m')).toBeTruthy();
            expect(icon?.getAttribute('height')).toEqual('18');
        }
    });

    it('onChange check', () => {
        const onChange = jest.fn();
        render(
            <Checkbox
                label="test label"
                checked={false}
                size={'s'}
                onChange={onChange}
            />
        );
        fireEvent.click(screen.getByRole('checkbox'));
        expect(onChange).toHaveBeenCalled();
    });

    it('disabled check', () => {
        render(
            <Checkbox
                label="test label"
                disabled
                checked={false}
                size={'s'}
                onChange={() => {
                    console.log('change checkbox');
                }}
            />
        );
        expect(screen.getByRole('checkbox')).toHaveProperty('disabled');
    });

    it('prop checked check', () => {
        const { container } = render(
            <Checkbox
                label="test label"
                disabled
                checked={true}
                size={'s'}
                onChange={() => {
                    console.log('change checkbox');
                }}
            />
        );
        expect(container.querySelector('.checked')).toBeTruthy();
    });

    it('should be icon left', () => {
        const { container } = render(
            <Checkbox
                label="test label"
                checked={true}
                onChange={() => {
                    console.log('change checkbox');
                }}
                iconLeft={{
                    name: 'question',
                    size: 10,
                }}
            />
        );
        expect(container.querySelector('.icon-question')).toBeInTheDocument();
        expect(container.querySelector('.icon-left')).toBeInTheDocument();
        expect(container.querySelector('.icon-right')).not.toBeInTheDocument();
    });

    it('should be icon right', () => {
        const { container } = render(
            <Checkbox
                label="test label"
                checked={true}
                onChange={() => {
                    console.log('change checkbox');
                }}
                iconRight={{
                    name: 'question',
                    size: 10,
                }}
            />
        );
        expect(container.querySelector('.icon-question')).toBeInTheDocument();
        expect(container.querySelector('.icon-right')).toBeInTheDocument();
        expect(container.querySelector('.icon-left')).not.toBeInTheDocument();
    });

    it('should not be icons', () => {
        const { container } = render(
            <Checkbox
                label="test label"
                checked={true}
                onChange={() => {
                    console.log('change checkbox');
                }}
            />
        );
        expect(
            container.querySelector('.icon-question')
        ).not.toBeInTheDocument();
        expect(container.querySelector('.icon-right')).not.toBeInTheDocument();
        expect(container.querySelector('.icon-left')).not.toBeInTheDocument();
    });
});
