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
    version?: string;
}

const Layout: FC<LayoutProps> = ({
    children,
    heading,
    breadcrumbs,
    version = '0.0.1'
}: LayoutProps) => (
    <div className="unique-layout">
        <header>
            <img src={Logo} alt="Logo" className="header__logo" />
        </header>
        <main>
            {heading && <Heading>{heading}</Heading>}
            {breadcrumbs && <Breadcrumbs {...breadcrumbs} />}
            <div className={'unique-layout__content'}>{children}</div>
        </main>
        <footer>
            <div className="footer__text">
                Powered by{' '}
                <a target="_blank" href={'/'}>
                    Unique Network
                </a>{' '}
                — the NFT chain to build for Polkadot and Kusama. Version {version}
            </div>
            <div className="footer__social">
                <a href="https://t.me/Uniquechain" target="_blank">
                    <Icon name="social-telegram" color="#009CF0" size={32} />
                </a>
                <a href="https://twitter.com/Unique_NFTchain" target="_blank">
                    <Icon name="social-twitter" color="#009CF0" size={32} />
                </a>
                <a href="https://discord.gg/jHVdZhsakC" target="_blank">
                    <Icon name="social-discord" color="#009CF0" size={32} />
                </a>
                <a href="https://github.com/UniqueNetwork" target="_blank">
                    <Icon name="social-github" color="#009CF0" size={32} />
                </a>
                <a
                    href="https://app.subsocial.network/@UniqueNetwork_NFT"
                    target="_blank"
                >
                    <Icon name="social-subsocial" color="#009CF0" size={32} />
                </a>
            </div>
        </footer>
    </div>
);

export default Layout;
