/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC, Fragment } from 'react';
import Icon from '../Icon/Icon';
import './Breadcrumbs.scss';

export interface BreadcrumbsProps {
    options: { title: string; link?: string }[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ options }: BreadcrumbsProps) => (
    <div className="unique-breadcrumbs-wrapper">
        {options.map((option, index) => {
            const last = index === options.length - 1;
            return (
                <Fragment key={index}>
                    {index > 0 && (
                        <Icon
                            name="carret-right"
                            size={8}
                            color={last ? '#ABB6C1' : '#81858E'}
                        />
                    )}
                    {last ? (
                        <span className="breadcrumb-item">{option.title}</span>
                    ) : (
                        <a className="breadcrumb-item" href={option.link}>
                            {option.title}
                        </a>
                    )}
                </Fragment>
            );
        })}
    </div>
);

export default Breadcrumbs;
