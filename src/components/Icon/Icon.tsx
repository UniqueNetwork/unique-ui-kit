/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import Icons from '../../assets/svg/icons.svg';

export interface IconProps {
    size: number;
    name?: string;
    file?: string;
    color?: string;
}

export const Icon = ({
    name,
    file,
    size,
    color = 'var(--color-blue-grey-300)',
}: IconProps) =>
    file ? (
        <img width={size} height={size} src={file} />
    ) : (
        <svg
            className={`icon icon-${name}`}
            fill={color}
            width={size}
            height={size}
            data-testid={`icon-${name}`}
        >
            <use xlinkHref={`${Icons}#icon-${name}`} />
        </svg>
    );
