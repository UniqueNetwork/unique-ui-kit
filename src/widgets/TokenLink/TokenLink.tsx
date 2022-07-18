/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { useCallback } from 'react';
import { Avatar, Text } from '../../components';
import './TokenLink.scss';

export interface ITokenLinkProps {
    image: string;
    title: string;
    link: {
        title: string;
        href: string;
    };
    onNavigation?: () => void;
}

export const TokenLink = ({ image, title, link, onNavigation }: ITokenLinkProps) => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        onNavigation?.();
    }, []);

    return (<a href={link.href} className='unique-token-link' onClick={handleClick}>
        <Avatar src={image} size={326} type='square' />
        <Text size='l' appearance='block'>
            {title}
        </Text>
        <Text size='s' color='grey-500' appearance='block'>
            {link.title}
        </Text>
    </a>);
};
