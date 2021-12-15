/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ReactNode, FC } from 'react';
import './Heading.scss';

interface IHeadingProps {
    children: ReactNode;
    size?: '1' | '2' | '3' | '4';
    className?: string;
}

const Heading: FC<IHeadingProps> = ({
    children,
    size = '1',
    className
}: IHeadingProps) => {
    return (
        <span className={`unique-font-heading-${size} ${className}`}>
            {children}
        </span>
    );
};

export default Heading;
