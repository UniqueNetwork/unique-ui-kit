/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import classNames from 'classnames';
import { FC } from 'react';
import { Avatar, Button, Heading, Icon, Text } from '..';
import noncollections from '../../assets/svg/404collections.svg';
import './CollectionsCard.scss';

interface ICollectionsCardProps {
    title: string;
    id: number;
    symbol: string;
    items: number;
    avatar?: React.ReactElement;
    className?: string;
    description?: string;
    withBorder?: boolean;
    withPadding?: boolean;
    owner?: string;
    controls?: React.ReactElement[];
    links?: {
        text: string;
        link?: string;
    }[];
    tokens?: { src: string; title: string }[];
    badge?: 'coin' | 'crown' | 'gear' | 'nft';
}

const CollectionsCard: FC<ICollectionsCardProps> = ({
    avatar,
    title,
    id,
    symbol,
    items,
    className,
    description,
    withBorder = true,
    withPadding = true,
    owner,
    controls,
    links,
    tokens,
    badge
}: ICollectionsCardProps) => {
    return (
        <div
            className={classNames('unique-collections-card', className, {
                'with-border': withBorder,
                'with-padding': withPadding
            })}
        >
            <div className="avatar">
                {avatar ? avatar : <Avatar src={noncollections} size={64} />}
            </div>
            {badge && (
                <div className="badge">
                    {<Icon name={`badge-${badge}`} size={24} />}
                </div>
            )}
            <div className="content">
                <div className="main">
                    <div className="text">
                        <Heading className="heading" size="4">
                            {title}
                        </Heading>
                        {description && (
                            <Text
                                className="description"
                                size="s"
                                color="grey-500"
                            >
                                {description}
                            </Text>
                        )}
                    </div>
                    {controls && (
                        <div className="buttons-container">
                            {controls.map((control, index) => {
                                return <div key={index}>{control}</div>;
                            })}
                        </div>
                    )}
                </div>
                <div className="meta">
                    <Text className="meta-block" size="s" color="grey-500">
                        ID:&nbsp;
                    </Text>
                    <Text className="meta-block" size="s">
                        {id.toString()}
                    </Text>
                    <Text className="meta-block" size="s" color="grey-500">
                        Symbol:&nbsp;
                    </Text>
                    <Text className="meta-block" size="s">
                        {symbol}
                    </Text>
                    <Text className="meta-block" size="s" color="grey-500">
                        Items:&nbsp;
                    </Text>
                    <Text className="meta-block" size="s">
                        {`${items.toLocaleString()}`}
                    </Text>
                </div>
                {owner && (
                    <div className="meta">
                        <Text className="meta-block" size="s" color="grey-500">
                            Owner:&nbsp;
                        </Text>
                        <Text className="meta-block" size="s">
                            {owner}
                        </Text>
                    </div>
                )}
                {links && (
                    <div className="links-container">
                        {links.map((link, index) => {
                            return (
                                <Button
                                    size="s"
                                    key={`${link.text}-${index}`}
                                    disabled={!link.link}
                                    title={link.text}
                                    onClick={() => {
                                        console.log(`redirect to ${link.link}`);
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
                {tokens && (
                    <div className="tokens-container">
                        <Text className="meta-block" size="s" color="grey-500">
                            Token’s preview
                        </Text>
                        <div className="tokens-container-preview">
                            {tokens.map((token, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={token.src}
                                        width={48}
                                        className="tokens-container-preview-image"
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollectionsCard;
