/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { ReactNode, useState } from 'react';
import { Icon } from '..';
import './Modal.scss';

export interface ModalProps {
    children: ReactNode;
    isVisible: boolean;
    isClosable?: boolean;
    onClose?(): void;
}

export const Modal = ({
    children,
    isVisible,
    isClosable,
    onClose,
}: ModalProps) => {
    const [clickCoords, setClickCoords] = useState({ pageX: -1, pageY: -1 });
    return isVisible ? (
        <div
            className="unique-modal-wrapper"
            onMouseDown={(event) => {
                const { pageX, pageY } = event;
                setClickCoords({ pageX, pageY });
            }}
            onClick={(event) => {
                const { pageX, pageY } = event;
                if (
                    pageX === clickCoords.pageX &&
                    pageY === clickCoords.pageY &&
                    event.target == event.currentTarget &&
                    isClosable
                ) {
                    onClose!();
                }
            }}
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
