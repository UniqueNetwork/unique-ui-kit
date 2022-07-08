/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { Avatar, Text } from '../../components';
import './CollectionLink.scss';

export interface ICollectionLinkProps {
    image: string;
    count: number;
    link: {
        title: string;
        href: string;
    };
}

export const CollectionLink = ({
    image,
    count,
    link,
}: ICollectionLinkProps) => (
    <a className="unique-collection-link" href={link.href}>
        <Avatar src={image} size={326} type="square" />
        <Text size="l" appearance="block">
            {link.title}
        </Text>
        <Text size="s" color="grey-500">
            Items:&nbsp;
        </Text>
        <Text size="s">{count.toLocaleString()}</Text>
    </a>
);
