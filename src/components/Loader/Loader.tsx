/**
 * @author Sergey Kozlov <skozlov@usetech.com>
 */

import { ReactNode } from 'react';
import classNames from 'classnames';
import { DimentionType, PlacementType } from '../../types';
import './Loader.scss';

export interface LoaderProps {
    isFullPage?: boolean;
    label?: string | ReactNode | null;
    size?: DimentionType;
    placement?: PlacementType;
}

export const Loader = ({
    isFullPage = false,
    placement = 'right',
    size = 'small',
    label,
}: LoaderProps) => (
    <div
        className={classNames('unique-loader', {
            full: isFullPage,
        })}
        role={'progressbar'}
    >
        <div className={classNames('loader-content', placement)}>
            <div className={classNames('loader', size)} />
            {label && (
                <div data-testid={'loader-label'} className={'loader-label'}>
                    {label}
                </div>
            )}
        </div>
    </div>
);
