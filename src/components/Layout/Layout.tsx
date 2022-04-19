/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { ReactNode } from 'react';
import { Breadcrumbs, Heading, Icon } from '../../components';
import { BreadcrumbsProps } from '../../types';
import Logo from '../../assets/svg/logo_explorer.svg';
import './Layout.scss';
import { Scrollbar } from '../';

interface LayoutProps {
    children: ReactNode;
    heading?: string;
    breadcrumbs?: BreadcrumbsProps;
    header?: ReactNode;
    footer?: ReactNode;
}

const Layout = ({
    children,
    heading,
    breadcrumbs,
    header,
    footer,
}: LayoutProps) => (
    <div className={'unique-layout-wrapper'}>
        <Scrollbar>
            <div className="unique-layout">
                <header>
                    {header || (
                        <a href="/">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="header__logo"
                            />
                        </a>
                    )}
                </header>
                <main>
                    {heading && <Heading>{heading}</Heading>}
                    {breadcrumbs && <Breadcrumbs {...breadcrumbs} />}

                    <div className={'unique-layout__content'}>{children}</div>
                </main>
                <footer>
                    {footer || (
                        <>
                            <div className="footer__text">
                                Powered by{' '}
                                <a target="_blank" href={'/'}>
                                    Unique Network
                                </a>{' '}
                                — the NFT chain to build for Polkadot and
                                Kusama. Version 22.18.1560
                            </div>
                            <div className="footer__social">
                                <a
                                    href="https://t.me/Uniquechain"
                                    target="_blank"
                                >
                                    <Icon
                                        name="social-telegram"
                                        color="#009CF0"
                                        size={32}
                                    />
                                </a>
                                <a
                                    href="https://twitter.com/Unique_NFTchain"
                                    target="_blank"
                                >
                                    <Icon
                                        name="social-twitter"
                                        color="#009CF0"
                                        size={32}
                                    />
                                </a>
                                <a
                                    href="https://discord.gg/jHVdZhsakC"
                                    target="_blank"
                                >
                                    <Icon
                                        name="social-discord"
                                        color="#009CF0"
                                        size={32}
                                    />
                                </a>
                                <a
                                    href="https://github.com/UniqueNetwork"
                                    target="_blank"
                                >
                                    <Icon
                                        name="social-github"
                                        color="#009CF0"
                                        size={32}
                                    />
                                </a>
                                <a
                                    href="https://app.subsocial.network/@UniqueNetwork_NFT"
                                    target="_blank"
                                >
                                    <Icon
                                        name="social-subsocial"
                                        color="#009CF0"
                                        size={32}
                                    />
                                </a>
                            </div>
                        </>
                    )}
                </footer>
            </div>
        </Scrollbar>
    </div>
);

export default Layout;
