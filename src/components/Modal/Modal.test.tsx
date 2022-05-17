import { fireEvent, render } from '@testing-library/react';
import Modal from './Modal';

const mockOnClose = jest.fn();

it('default prop check', () => {
    render(<Modal isVisible={false}>Test modal content</Modal>);
});

it('click check', () => {
    const { container } = render(
        <Modal isClosable onClose={mockOnClose} isVisible={true}>
            Test modal content
        </Modal>
    );
    fireEvent.mouseDown(container.querySelector('.unique-modal-wrapper')!)
    fireEvent.click(container.querySelector('.unique-modal-wrapper')!);
});
