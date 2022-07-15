import { FC } from 'react';
import { ScrollbarProps, Scrollbars } from 'react-custom-scrollbars-2';
import './Scrollbar.scss';

export interface ScrollProps extends ScrollbarProps {
    width?: number | string;
    height?: number | string;
}

export const Scrollbar: FC<ScrollProps> = ({
    children,
    style,
    width = 'auto',
    height = 100,
    ...rest
}) => (
    <Scrollbars
        className="unique-scrollbar"
        style={{ ...style, width, height }}
        {...rest}
    >
        {children}
    </Scrollbars>
);
