import { FC } from 'react';
import cn from 'classnames';
import './PageElement.scss';

interface IPageElementProps {
    page: number;
    isActive: boolean;
    className?: string;
    disabled?: boolean;
    isMobile?: boolean;
    onClick?: (page: number) => void;
}

export const PageElement: FC<IPageElementProps> = ({
    className,
    page,
    isActive,
    disabled,
    onClick
}: IPageElementProps) => {
    return (
        <li
            key={page}
            className={cn(
                'page-element',
                { active: isActive && !disabled },
                { disabled },
                { className }
            )}
            onClick={() => onClick!(page)}
        >
            {page}
        </li>
    );
};
