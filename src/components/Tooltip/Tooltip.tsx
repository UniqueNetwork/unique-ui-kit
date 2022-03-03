/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import './Tooltip.scss';

interface TooltipProps {
    children: ReactNode;
    text: string;
    position: 'left' | 'top' | 'bottom' | 'right';
    align: 'left' | 'right';
}

const Tooltip: FC<TooltipProps> = ({
    children,
    text,
    position = 'top',
    align = 'left'
}: TooltipProps) => (
    <div className={classNames('unique-tooltip-wrapper')}>
        {children}
        <span
            className={classNames('tooltip-text', position, 'align-' + align)}
        >
            {text}
        </span>
    </div>
);

export default Tooltip;
