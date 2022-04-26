/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import { Avatar, Link, Text } from '../../components';
import './TokenLink.scss';

interface ITokenLink {
    image: string;
    title: string;
    link: {
        title: string;
        href: string;
    };
}

const TokenCard: FC<ITokenLink> = ({ image, title, link }: ITokenLink) => (
    <div className="unique-token-link">
        <Avatar src={image} size={268} type="square" />
        <Text size="l">{title}</Text>
        <Link href={link.href} title={link.title} />
    </div>
);

export default TokenCard;
