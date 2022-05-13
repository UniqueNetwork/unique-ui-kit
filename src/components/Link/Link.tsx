/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import './Link.scss';

interface LinkProps {
    title: string;
    href?: string;
    role?: 'primary' | 'secondary' | 'danger';
    rel?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
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
