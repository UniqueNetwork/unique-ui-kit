/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ReactNode, FC } from 'react';
import cn from 'classnames';
import './Text.scss';

type TColor = 'primary' | 'blue-grey' | 'dark';

interface ITextProps {
    children: ReactNode;
    size?: 'xs' | 's' | 'm' | 'l';
    weight?: 'regular' | 'medium';
    color?: TColor;
    className?: string;
}

const Text: FC<ITextProps> = ({
    children,
    color = 'dark',
    size = 'm',
    className,
    weight = 'regular'
}: ITextProps) => {
    const fontWeight = weight === 'medium' ? '-medium' : '';
    return (
        <span
            className={cn(
                `unique-font-body-${size}${fontWeight}`,
                {
                    [`unique-color-${color}-600`]: color !== 'dark'
                },
                { className }
            )}
        >
            {children}
        </span>
    );
};

export default Text;
