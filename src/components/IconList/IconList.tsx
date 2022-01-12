import React, { FC } from 'react';
import { Icon, Heading } from '..';
import './IconList.scss';

interface IconProps {
    names?: string[];
    icon?: SVGAElement;
    title?: string;
    size?: number;
    color?: string;
}

const IconPalette: FC<IconProps> = ({
    names,
    icon,
    title,
    size = 20,
    color
}: IconProps) => (
    <div className={`unique-icon-palette ${icon}`}>
        {title && <Heading size="2">{title}</Heading>}
        {names &&
            names.map((name, index) => (
                <div key={index} className="icon-list">
                    <strong>{name}</strong>
                    <Icon name={name} size={size} />
                </div>
            ))}
    </div>
);

export default IconPalette;
