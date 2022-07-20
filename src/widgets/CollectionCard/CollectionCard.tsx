/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import {
    Avatar,
    Button,
    ButtonProps,
    Heading,
    Icon,
    IconProps,
    Text,
} from '../../components';
import './CollectionCard.scss';
import Empty from '../../assets/static/empty.svg';

export interface ICollectionCardProps {
    avatar?: string;
    title: string;
    meta: {
        id: string;
        symbol: string;
        items: number;
        owner?: string;
    };
    links?: {
        title: string;
        onClick(): void;
    }[];
    actions?: {
        title: string;
        appearance?: {
            size?: ButtonProps['size'];
            role?: ButtonProps['role'];
            iconLeft?: IconProps;
            iconRight?: IconProps;
        };
        onClick(): void;
    }[];
    tokens?: string[];
    badge?: 'coin' | 'crown' | 'gear' | 'nft';
    description?: string;
}

export const CollectionCard = ({
    avatar = Empty,
    title,
    meta,
    badge,
    description,
    links,
    actions,
    tokens,
}: ICollectionCardProps) => (
    <div className="unique-collection-card">
        {badge && (
            <div className="collection-badge">
                {<Icon name={`badge-${badge}`} size={24} />}
            </div>
        )}
        <Avatar src={avatar} size={64} type="circle" />
        <div className="collection-content">
            <Heading size="4" className="collection-title">
                {title}
            </Heading>
            {description && (
                <Text
                    className="collection-description"
                    size="s"
                    color="grey-500"
                >
                    {description}
                </Text>
            )}
            <div className="collection-meta">
                <div>
                    <div>
                        <Text size="s" color="grey-500">
                            ID:
                        </Text>
                        <Text size="s">{meta.id}</Text>
                    </div>
                    <div>
                        <Text size="s" color="grey-500">
                            Symbol:
                        </Text>
                        <Text size="s">{meta.symbol}</Text>
                    </div>
                    <div>
                        <Text size="s" color="grey-500">
                            Items:
                        </Text>
                        <Text size="s">{meta.items.toLocaleString()}</Text>
                    </div>
                </div>
                {meta.owner && (
                    <div>
                        <div>
                            <Text size="s" color="grey-500">
                                Owner:
                            </Text>
                            <Text size="s">{meta.owner}</Text>
                        </div>
                    </div>
                )}
            </div>
            {links && (
                <div className="collection-links">
                    {links.map((link, index) => (
                        <Button
                            size="small"
                            key={index}
                            title={link.title}
                            onClick={link.onClick}
                        />
                    ))}
                </div>
            )}
            {tokens && (
                <div className="collection-tokens">
                    <Text size="s" color="grey-500">
                        Tokens preview
                    </Text>
                    <div className="tokens-preview">
                        {tokens.map((token, index) => (
                            <Avatar src={token} size={48} key={index} />
                        ))}
                    </div>
                </div>
            )}
        </div>
        {actions && (
            <div className="collection-actions">
                {actions.map((action, index) => (
                    <Button
                        key={index}
                        title={action.title}
                        onClick={action.onClick}
                        {...action.appearance}
                    />
                ))}
            </div>
        )}
    </div>
);
