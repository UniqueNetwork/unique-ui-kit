/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import * as React from 'react';
import { ReactNode, FC } from 'react';
import cn from 'classnames';
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
    const Componen: typeof React.Component =
        `h${size}` as unknown as typeof React.Component;
    return (
        <Componen className={cn(`unique-font-heading-${size}`, className)}>
            {children}
        </Componen>
    );
};

export default Heading;
