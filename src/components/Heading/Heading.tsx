/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ReactNode, FC } from 'react';
import { TColor } from './colors';
import './Heading.scss';

interface IHeadingProps {
    children: ReactNode;
    size?: 1 | 2 | 3 | 4;
    color?: TColor;
    className?: string;
}

const Heading: FC<IHeadingProps> = ({
    children,
    color = 'dark',
    size = 1,
    className,
}: IHeadingProps) => {
    return (
        <span
            className={`unique-font-heading-${size} unique-color-${color}-600 ${className}`}
        >
            {children}
        </span>
    );
};

export default Heading;
