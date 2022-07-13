/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { useRef, FC } from 'react';
import { Tooltip, TooltipAlign } from '../../components';
import './TooltipSet.scss';

export interface TooltipSetProps {
    tooltips: {
        children?: JSX.Element;
        message: string;
        align?: TooltipAlign;
    }[];
}

export const TooltipSet: FC<TooltipSetProps> = ({ tooltips }) => (
    <div className={`unique-tooltip-set`} ref={null}>
        {tooltips?.map((tooltip, index) => {
            const rootRef = useRef<HTMLDivElement>(null);
            return (
                <div key={index} className={`tooltip-item`}>
                    <Tooltip targetRef={rootRef} align={tooltip.align}>
                        {tooltip.message}
                    </Tooltip>
                    <span ref={rootRef}>{tooltip.children}</span>
                </div>
            );
        })}
    </div>
);
