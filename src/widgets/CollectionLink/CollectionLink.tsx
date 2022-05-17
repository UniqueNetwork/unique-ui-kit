/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { Avatar, Text } from '../../components';
import './CollectionLink.scss';

export interface ICollectionLinkProps {
    image: string;
    title: string;
    count: number;
}

export const CollectionLink = ({
    image,
    title,
    count,
}: ICollectionLinkProps) => (
    <a className="unique-collection-link" href="#">
        <Avatar src={image} size={326} type="square" />
        <Text size="l">{title}</Text>
        <Text size="s" color="grey-500">
            Items:&nbsp;
        </Text>
        <Text size="s">{count.toLocaleString()}</Text>
    </a>
);
