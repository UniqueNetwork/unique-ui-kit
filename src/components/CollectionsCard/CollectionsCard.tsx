/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import classNames from 'classnames';
import { FC } from 'react';
import { Avatar, Button, Heading, Icon, Text } from '..';
import imageNft from '../../assets/images/nft.png';
import noncollections from '../../assets/svg/404collections.svg';
import './CollectionsCard.scss';

interface ICollectionsCardProps {
    avatar: React.ReactElement;
    title: string;
    id: number;
    symbol: string;
    items: number;
    className?: string;
    description?: string;
    withBorder?: boolean;
    withPadding?: boolean;
    owner?: string;
    controls?: boolean;
    links?: boolean;
    tokens?: string[];
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
    controls = true,
    links = true,
    tokens
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
                            <Button
                                role="primary"
                                size="s"
                                title={'Create token'}
                                onClick={() => {
                                    console.log('Create token btn click');
                                }}
                            />
                            <Button
                                role="danger"
                                size="s"
                                title={'Burn'}
                                iconLeft={{
                                    name: 'burn',
                                    size: 15,
                                    color: '#FF6335'
                                }}
                                onClick={() => {
                                    console.log('Burn btn click');
                                }}
                            />
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
                    <Text className="meta-block" size="s" color="primary-500">
                        {`${items.toLocaleString()}`}
                    </Text>
                </div>
                {owner && (
                    <div className="meta">
                        <Text className="meta-block" size="s" color="grey-500">
                            Owner:&nbsp;
                        </Text>
                        <Text
                            className="meta-block"
                            size="s"
                            color="primary-500"
                        >
                            {owner}
                        </Text>
                    </div>
                )}
                {links && (
                    <div className="links-container">
                        <Button
                            size="s"
                            title={'Go to Block Explorer'}
                            onClick={() => {
                                console.log('Create token btn click');
                            }}
                        />
                        <Button
                            size="s"
                            title={'Go to Wallet'}
                            onClick={() => {
                                console.log('Create token btn click');
                            }}
                        />
                    </div>
                )}
                {tokens && (
                    <div className="tokens-container">
                        <Text className="meta-block" size="s" color="grey-500">
                            Token’s preview
                        </Text>
                        <div className="tokens-container-preview">
                            {tokens.map((token) => {
                                return (
                                    <img
                                        src={token}
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
