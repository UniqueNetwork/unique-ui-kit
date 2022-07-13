/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { Avatar, Text } from '../../components';
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
    <a href={link.href} className="unique-token-link">
        <Avatar src={image} size={326} type="square" />
        <Text size="l" appearance="block">
            {title}
        </Text>
        <Text size="s" color="primary-500" appearance="block">
            {link.title}
        </Text>
    </a>
);
