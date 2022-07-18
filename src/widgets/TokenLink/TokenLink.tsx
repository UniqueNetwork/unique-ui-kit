/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React from 'react';
import { Avatar, Text } from '../../components';
import './TokenLink.scss';

export interface ITokenLinkProps {
    image: string;
    title: string;
    link: {
        title: string;
        href: string;
    };
    onNavigation?: () => void;
}

export const TokenLink = ({ image, title, link, onNavigation }: ITokenLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        onNavigation?.();
    }

    return (
        <a href={link.href} className="unique-token-link" onClick={handleClick}>
            <Avatar src={image} size={326} type="square" />
            <Text size="l" appearance="block">
                {title}
            </Text>
            <Text
                appearance="block"
                className="unique-token-link__description"
                color="grey-500"
                size="s"
            >
                {link.title}
            </Text>
        </a>
    );
};
