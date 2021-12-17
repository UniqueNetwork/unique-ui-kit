/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC, ReactNode } from 'react';
import { Breadcrumbs, Heading, Icon } from '../../components';
import { BreadcrumbsProps } from '../../types';
import Logo from '../../assets/svg/logo_explorer.svg';
import './Layout.scss';

interface LayoutProps {
    children: ReactNode;
    heading?: string;
    breadcrumbs?: BreadcrumbsProps;
}

const Layout: FC<LayoutProps> = ({
    children,
    heading,
    breadcrumbs
}: LayoutProps) => (
    <div className="basic-layout">
        <header>
            <img src={Logo} alt="Logo" className="header__logo" />
        </header>
        <main>
            {heading && <Heading>{heading}</Heading>}
            {breadcrumbs && <Breadcrumbs {...breadcrumbs} />}
            <div className={'basic-layout__content'}>{children}</div>
        </main>
        <footer>
            <div className="footer__text">
                Powered by{' '}
                <a target="_blank" href={'/'}>
                    Unique Network
                </a>{' '}
                — the NFT chain build for Polkadot and Kusama. Version
                22.18.1560
            </div>
            <div className="footer__social">
                <a href="#" target="_blank">
                    <Icon name="social-telegram" color="#009CF0" size={32} />
                </a>
                <a href="#" target="_blank">
                    <Icon name="social-twitter" color="#009CF0" size={32} />
                </a>
                <a href="#" target="_blank">
                    <Icon name="social-discord" color="#009CF0" size={32} />
                </a>
                <a href="#" target="_blank">
                    <Icon name="social-github" color="#009CF0" size={32} />
                </a>
                <a href="#" target="_blank">
                    <Icon name="social-subsocial" color="#009CF0" size={32} />
                </a>
            </div>
        </footer>
    </div>
);

export default Layout;
