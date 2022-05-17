import { Tooltip } from './Tooltip';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

describe('Tooltip component', () => {
    beforeEach(() => {
        render(
            <Tooltip content={<span>Content</span>}>
                <p>Lorem ipsum</p>
            </Tooltip>
        );
    });

    it('should be show only content', () => {
        const { queryByText } = screen;
        expect(queryByText(/content/i)).toBeInTheDocument();
        expect(queryByText(/lorem ipsum/i)).not.toBeInTheDocument();
    });

    it('should be show child content on mouseEnter event', async () => {
        const { queryByText } = screen;

        await waitFor(() => fireEvent.mouseEnter(screen.getByText(/content/i)));

        expect(queryByText(/content/i)).toBeInTheDocument();
        expect(queryByText(/lorem ipsum/i)).toBeInTheDocument();
    });

    it('should be hide child content on mouseLeave event', async () => {
        const { queryByText } = screen;

        const element = screen.getByText(/content/i);

        await waitFor(() => fireEvent.mouseEnter(element));
        expect(queryByText(/content/i)).toBeInTheDocument();
        expect(queryByText(/lorem ipsum/i)).toBeInTheDocument();

        await waitFor(() => fireEvent.mouseLeave(element));
        expect(queryByText(/content/i)).toBeInTheDocument();
        expect(queryByText(/lorem ipsum/i)).not.toBeInTheDocument();
    });

    it('should be show arrow on mouseEnter event', async () => {
        const { queryByTestId } = screen;

        await waitFor(() => fireEvent.mouseEnter(screen.getByText(/content/i)));

        expect(queryByTestId('tooltip-arrow')).toBeInTheDocument();
    });
});
