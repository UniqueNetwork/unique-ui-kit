/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import Icon from '../Icon/Icon';
import './Breadcrumbs.scss';

export interface BreadcrumbsProps {
    options: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ options }: BreadcrumbsProps) => (
    <div className="unique-breadcrumbs-wrapper">
        {options.map((breadcrumb, index) => (
            <>
                <span className="breadcrumb-item">{breadcrumb}</span>
                {options.length > index + 1 && (
                    <Icon name="carret-right" size={8} color="#81858E" />
                )}
            </>
        ))}
    </div>
);

export default Breadcrumbs;
