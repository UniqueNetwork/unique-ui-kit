/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import classNames from 'classnames';
import './Heading.scss';

export interface IHeadingProps {
    children: string;
    size?: '1' | '2' | '3' | '4';
    className?: string;
}

export const Heading = ({ children, size = '1', className }: IHeadingProps) => {
    const Component = `h${size}` as keyof JSX.IntrinsicElements;
    return (
        <Component
            className={classNames(
                'unique-font-heading',
                `size-${size}`,
                className
            )}
        >
            {children}
        </Component>
    );
};
