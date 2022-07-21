/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import classNames from 'classnames';
import './Heading.scss';
import { ComponentProps } from '../../types';

export interface IHeadingBaseProps {
    children: string;
    size?: '1' | '2' | '3' | '4';
}

export type HeadingProps = IHeadingBaseProps &
    Pick<ComponentProps, 'className' | 'testid'>;

export const Heading = ({
    children,
    size = '1',
    className,
    testid,
}: HeadingProps) => {
    const Component = `h${size}` as keyof JSX.IntrinsicElements;
    return (
        <Component
            className={classNames(
                'unique-font-heading',
                `size-${size}`,
                className
            )}
            data-testid={testid}
        >
            {children}
        </Component>
    );
};
