/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import { Fragment } from 'react';
import { Icon } from '../Icon';
import './Breadcrumbs.scss';

export interface BreadcrumbsProps {
    options: { title: string; link?: string }[];
}

export const Breadcrumbs = ({ options }: BreadcrumbsProps) => (
    <div className="unique-breadcrumbs-wrapper">
        {options.map((option, index) => {
            const last = index === options.length - 1;
            return (
                <Fragment key={index}>
                    {index > 0 && (
                        <Icon
                            name="carret-right"
                            size={8}
                            color={
                                last
                                    ? 'var(--color-blue-grey-300)'
                                    : 'var(--color-grey-500)'
                            }
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
