/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { AnchorHTMLAttributes, FC } from 'react';
import './Link.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    role?: 'primary' | 'secondary' | 'danger';
    onClick?(): void;
}

const Link: FC<LinkProps> = ({
    title,
    role = 'primary',
    ...rest
}: LinkProps) => (
    <a className={`unique-link ${role}`} {...rest}>
        {title}
    </a>
);

export default Link;
