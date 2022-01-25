/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import './Link.scss';

interface LinkProps {
    title: string;
    href?: string;
    role?: 'primary' | 'secondary' | 'danger';
    onClick?(): void;
}

const Link: FC<LinkProps> = ({
    title,
    href,
    role = 'primary',
    onClick
}: LinkProps) => (
    <a href={href} className={`unique-link ${role}`} onClick={onClick}>
        {title}
    </a>
);

export default Link;
