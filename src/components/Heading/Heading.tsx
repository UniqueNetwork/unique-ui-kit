/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Heading.scss';

interface IHeadingProps {
    children: string;
    wrapper?: 'header' | 'body';
    size?: '1' | '2' | '3' | '4';
    className?: string;
}

const Heading: FC<IHeadingProps> = ({
    children,
    wrapper = 'header',
    size = '1',
    className
}: IHeadingProps) => {
    const Component = `h${size}` as keyof JSX.IntrinsicElements;
    return (
        <Component
            className={classNames(
                'unique-font-heading',
                `size-${size}`,
                `to-${wrapper}`,
                className
            )}
        >
            {children}
        </Component>
    );
};

export default Heading;
