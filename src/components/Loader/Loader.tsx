import cn from 'classnames';
import './Loader.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { DimentionType } from '../../types';

type Placement = 'right' | 'left' | 'bottom' | 'top';

export interface LoaderProps {
    isFullPage?: boolean;
    label?: string | ReactNode | null;
    placementLabel?: Placement;
    size?: DimentionType;
}

export const Loader = ({
    isFullPage = false,
    label = 'Please wait',
    placementLabel = 'right',
    size = 'small',
}: LoaderProps) => (
    <div
        className={cn('unique-loader', {
            full: isFullPage,
        })}
        role={'progressbar'}
    >
        <div className={classNames('loader-content', placementLabel)}>
            <div className={classNames('loader', size)} />
            {label && (
                <div data-testid={'loader-label'} className={'loader-label'}>
                    {label}
                </div>
            )}
        </div>
    </div>
);
