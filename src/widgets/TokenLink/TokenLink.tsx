/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { Avatar, Link, Text } from '../../components';
import './TokenLink.scss';

export interface ITokenLinkProps {
    image: string;
    title: string;
    link: {
        title: string;
        href: string;
    };
}

export const TokenLink = ({ image, title, link }: ITokenLinkProps) => (
    <div className="unique-token-link">
        <Avatar src={image} size={326} type="square" />
        <Text size="l">{title}</Text>
        <Link href={link.href} title={link.title} />
    </div>
);
