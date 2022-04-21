/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import { Avatar, Link, Text } from '../../components';
import './TokenCard.scss';

interface ITokenCard {
    image: string;
    title: string;
    link: {
        title: string;
        href: string;
    };
}

const TokenCard: FC<ITokenCard> = ({ image, title, link }: ITokenCard) => (
    <div className="unique-token-card">
        <Avatar src={image} size={268} type="square" />
        <Text size="l">{title}</Text>
        <Link href={link.href} title={link.title} />
    </div>
);

export default TokenCard;
