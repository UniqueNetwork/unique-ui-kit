/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { FC } from 'react';
import './CollectionsCard.scss';
import classNames from 'classnames';
import { Avatar, Heading, Text } from '..';
import { IAvatarProps } from '../Avatar/Avatar';

interface ICollectionsCardProps {
    avatar: IAvatarProps;
    title: string;
    description?: string;
    id: number;
    symbol: string;
    items: number;
    owner?: string;
    badge?: { color: string; icon: string };
    withoutPadding?: boolean;
    withBorder?: boolean;

    src: string;
    className: string;
    size: number;
    type: 'circle' | 'square';
}

const CollectionsCard: FC<ICollectionsCardProps> = ({
    avatar,
    title,
    description,
    id,
    symbol,
    items,
    owner,
    badge,
    withoutPadding = false,
    withBorder = false,
    className
}: ICollectionsCardProps) => {
    return (
        <div
            className={classNames('unique-collections-card', className, {
                'with-border': withBorder
            })}
        >
            <div>
                <Avatar
                    type={avatar.type}
                    src={avatar.src}
                    size={avatar.size}
                />
            </div>
            <div className="column main-content">
                {!withoutPadding && (
                    <Heading className="heading" size="4">
                        {title}
                    </Heading>
                )}
                {withoutPadding && (
                    <Text className="heading" size="m" weight="medium">
                        {title}
                    </Text>
                )}
                {description && (
                    <Text className="description" size="s" color="grey-500">
                        {description}
                    </Text>
                )}
                <div className="row second">
                    <Text size="s" color="grey-500">
                        Id:&nbsp;
                    </Text>
                    <Text className="cell" size="s">
                        {`${id}`}
                    </Text>
                    <Text size="s" color="grey-500">
                        Symbol:&nbsp;
                    </Text>
                    <Text className="cell" size="s">
                        {symbol}
                    </Text>
                    <Text size="s" color="grey-500">
                        Items:&nbsp;
                    </Text>
                    <Text size="s" color="primary-500">
                        {`${items.toLocaleString()}`}
                    </Text>
                </div>
                {owner && (
                    <div className="row third">
                        <Text size="s" color="grey-500">
                            Owner:&nbsp;
                        </Text>
                        <Text size="s" color="primary-500">
                            {owner}
                        </Text>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollectionsCard;
