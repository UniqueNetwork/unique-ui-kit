/**
 * @author Sergey Kozlov <skozlov@usetech.com>
 */

import { ReactNode } from 'react';
import {
    Scrollbars,
    ScrollbarProps as BaseScrollbarProps,
} from 'react-custom-scrollbars';
import classNames from 'classnames';

import './Scrollbar.scss';

export type ScrollbarProps = BaseScrollbarProps & {
    children: ReactNode;
};

const Scrollbar = ({ children, className, ...props }: ScrollbarProps) => (
    <Scrollbars
        autoHeight={true}
        {...props}
        className={classNames('unique-scrollbar', className)}
        renderThumbVertical={(props) => (
            <div {...props} className={'thumb-vertical'} />
        )}
        renderTrackVertical={(props) => (
            <div {...props} className={'track-vertical'} />
        )}
        renderThumbHorizontal={(props) => (
            <div {...props} className={'thumb-horizontal'} />
        )}
        renderTrackHorizontal={(props) => (
            <div {...props} className={'track-horizontal'} />
        )}
    >
        {children}
    </Scrollbars>
);

export default Scrollbar;
