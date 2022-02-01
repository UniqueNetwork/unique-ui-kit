import React, { FC, ReactNode } from 'react';
import { Icon } from '..';
import './Modal.scss';

interface ModalProps {
    children: ReactNode;
    isVisible: boolean;
    isClosable?: boolean;
    onClose?(): void;
}

const Modal: FC<ModalProps> = ({
    children,
    isVisible,
    isClosable,
    onClose
}: ModalProps) => {
    return isVisible ? (
        <div
            className="unique-modal-wrapper"
            onClick={(event) =>
                event.target == event.currentTarget && isClosable && onClose!()
            }
        >
            <div className="unique-modal">
                {isClosable && (
                    <div className="close-button" onClick={onClose}>
                        <Icon name={'close'} size={16} />
                    </div>
                )}
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
