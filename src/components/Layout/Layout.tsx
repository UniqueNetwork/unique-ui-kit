/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import './Layout.scss';

interface LayoutProps {
    children: any;
    header?: string;
    footer?: string;
}

export const Layout: FC<LayoutProps> = ({
    children,
    header,
    footer
}: LayoutProps) => (
    <div className="basic-layout">
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
    </div>
);
