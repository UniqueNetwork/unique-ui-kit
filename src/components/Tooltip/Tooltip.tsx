/**
 * @author Sergey Kozlov <skozlov@usetech.com>
 */

import {
    cloneElement,
    ReactElement,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    arrow,
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
    Side,
    Placement,
} from '@floating-ui/react-dom';

import './Tooltip.scss';
import { createPortal } from 'react-dom';

export interface TooltipProps {
    content: ReactElement;
    offset?: number;
    placement?: Placement;
    children: ReactNode;
}

const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
};

const Tooltip = ({
    offset: offsetUser = 10,
    content,
    placement: placementUser,
    children,
}: TooltipProps) => {
    const [isVisibleTooltip, setVisibleTooltip] = useState(false);

    // create tooltip container for portal
    const rootElemRef = useRef(document.createElement('div'));

    const arrowRef = useRef(null);
    const {
        x,
        y,
        reference,
        floating,
        update,
        refs,
        middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
        placement,
    } = useFloating({
        placement: placementUser,
        middleware: [
            offset(offsetUser),
            flip(),
            shift(),
            arrow({ element: arrowRef }),
        ],
    });

    const arrowSide = staticSide[placement.split('-')[0] as Side];

    useEffect(() => {
        if (!refs.reference.current || !refs.floating.current) {
            return;
        }

        return autoUpdate(
            refs.reference.current,
            refs.floating.current,
            update
        );
    }, [refs.reference, refs.floating, update]);

    useEffect(
        () => () => {
            rootElemRef.current.remove();
        },
        []
    );

    const handleMouseLeave = () => {
        setVisibleTooltip(false);
        rootElemRef.current.remove();
    };

    const handleMouseEnter = () => {
        const bodyElem = document.querySelector('body');
        bodyElem?.appendChild(rootElemRef.current);
        setVisibleTooltip(true);
    };

    const TooltipContent = isVisibleTooltip ? (
        <div
            ref={floating}
            style={{
                top: y ?? '',
                left: x ?? '',
            }}
            className={'unique-tooltip'}
        >
            {children}
            <div
                className={'arrow'}
                ref={arrowRef}
                style={{
                    left: arrowX != null ? `${arrowX}px` : '',
                    top: arrowY != null ? `${arrowY}px` : '',
                    [arrowSide]: '-4px',
                }}
                data-testid={'tooltip-arrow'}
            />
        </div>
    ) : null;

    return (
        <>
            {cloneElement(content, {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                ref: reference,
                className: 'unique-tooltip-content',
            })}
            {createPortal(TooltipContent, rootElemRef.current)}
        </>
    );
};

export default Tooltip;
