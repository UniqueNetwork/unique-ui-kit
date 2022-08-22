/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { AnchorHTMLAttributes } from 'react';
import './Link.scss';
import classNames from 'classnames';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title?: string;
    role?: 'primary' | 'secondary' | 'danger';
    onClick?(): void;
}

export const Link = ({
    children,
    title,
    role = 'primary',
    className,
    ...rest
}: LinkProps) => (
    <a className={classNames(`unique-link ${role}`, className)} {...rest}>
        {children || title}
    </a>
);
