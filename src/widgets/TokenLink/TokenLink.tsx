/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { ReactNode } from 'react';
import { Avatar, Text } from '../../components';
import './TokenLink.scss';

export interface ITokenLinkProps {
    image: string;
    title: string;
    link?: string;
    meta?: ReactNode;
    onTokenClick(): void;
    onMetaClick(): void;
}

export const TokenLink = ({
    image,
    title,
    link,
    meta = (
        <Text size="s" color="primary-500" appearance="block">
            {link}
        </Text>
    ),
    onTokenClick,
    onMetaClick,
}: ITokenLinkProps) => (
    <div className="unique-token-link">
        <div onClick={onTokenClick}>
            <Avatar src={image} size={326} type="square" />
            <Text size="l" appearance="block">
                {title}
            </Text>
        </div>
        <div onClick={onMetaClick}>{meta}</div>
    </div>
);
