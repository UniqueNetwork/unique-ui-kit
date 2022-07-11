/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { Text } from '../../components';
import './CollectionLink.scss';

export interface ICollectionLinkProps {
    image: string;
    title: string;
    count: number;
    link: string;
}

const onImageLoad = ({ target: img }: any) => {
    const { offsetWidth } = img;
    const parentWidth = img.parentElement.offsetWidth;
    (offsetWidth >= parentWidth) && img.classList.add('_fit-cover');
    img.classList.add('_loaded');
};

export const CollectionLink = ({
   image,
   title,
   count,
   link,
}: ICollectionLinkProps) => (
    <a className="unique-collection-link" href={link}>
        <div className="unique-collection-link__picture">
            <img src={image} alt={title} onLoad={onImageLoad} />
        </div>
        <Text size="l" appearance="block">
            {title}
        </Text>
        <Text size="s" color="grey-500">
            Items:&nbsp;
        </Text>
        <Text size="s">{count.toLocaleString()}</Text>
    </a>
);
