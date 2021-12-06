/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import './Layout.scss';

export const Layout: FC = ({ children }) => (
    <div className="basic-layout">
        <header></header>
        <main>{children}</main>
    </div>
);
