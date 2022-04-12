import { render } from '@testing-library/react';
import event from '@testing-library/user-event';
import Accordion from './Accordion';
import { Icon } from '../index';

describe('Accordion component', () => {
    it('should show only title', () => {
        const { getByText, container } = render(
            <Accordion title={'Title'}>Content</Accordion>
        );
        expect(getByText(/title/gi)).toBeInTheDocument();
        expect(container.querySelector('.unique-accordion')).not.toHaveClass(
            'visible'
        );
    });

    it('should show title and content', async () => {
        const { container, getByText } = render(
            <Accordion title={'Title'}>Content</Accordion>
        );

        await event.click(
            container.querySelector('.unique-accordion-title') as HTMLElement
        );

        expect(getByText(/title/gi)).toBeInTheDocument();
        expect(container.querySelector('.unique-accordion')).toHaveClass(
            'visible'
        );
    });

    it('component should be open', async () => {
        const { container, getByText } = render(
            <Accordion title={'Title'} expanded={true}>
                Content
            </Accordion>
        );

        expect(getByText(/title/gi)).toBeInTheDocument();
        expect(
            container.querySelector('.unique-accordion') as HTMLElement
        ).toHaveClass('visible');

        await event.click(
            container.querySelector('.unique-accordion-title') as HTMLElement
        );
        expect(container.querySelector('.unique-accordion')).not.toHaveClass(
            'visible'
        );
    });

    it('should be default icon', async () => {
        const { container } = render(
            <Accordion title={'Title'}>Content</Accordion>
        );

        expect(
            container.querySelector('.icon-carret-right')
        ).toBeInTheDocument();
    });

    it('should be custom icon', async () => {
        const { container } = render(
            <Accordion
                title={'Title'}
                expendIcon={
                    <Icon
                        size={16}
                        name={'checked'}
                        color={'var(--color-secondary-400)'}
                    />
                }
            >
                Content
            </Accordion>
        );

        expect(container.querySelector('.icon-checked')).toBeInTheDocument();
    });
});
