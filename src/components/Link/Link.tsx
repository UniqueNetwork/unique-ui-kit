/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { AnchorHTMLAttributes } from 'react';
import './Link.scss';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    role?: 'primary' | 'secondary' | 'danger';
    onClick?(): void;
}

export const Link = ({ title, role = 'primary', ...rest }: LinkProps) => (
    <a className={`unique-link ${role}`} {...rest}>
        {title}
    </a>
);
