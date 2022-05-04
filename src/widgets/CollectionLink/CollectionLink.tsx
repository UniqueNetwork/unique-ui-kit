/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import { Avatar, Text } from '../../components';
import './CollectionLink.scss';

interface ICollectionLink {
    image: string;
    title: string;
    id: string;
    count: number;
}

const CollectionLink: FC<ICollectionLink> = ({
    image,
    title,
    id,
    count,
}: ICollectionLink) => (
    <a className="unique-collection-link" href="#">
        <Avatar src={image} size={326} type="square" />
        <Text size="l">{title}</Text>
        <Text size="s" color="grey-500">
            Items:&nbsp;
        </Text>
        <Text size="s">{count.toLocaleString()}</Text>
    </a>
);

export default CollectionLink;
