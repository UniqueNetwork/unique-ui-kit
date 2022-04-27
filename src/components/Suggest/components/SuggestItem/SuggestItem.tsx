import type { SuggestProps } from '../../Suggest';

import './SuggestItem.scss';
import classNames from 'classnames';

export type SuggestItemProps<T> = Pick<
    SuggestProps<T>,
    'getSuggestionValue'
> & {
    suggestion: T;
    isActive?: boolean;
};

export const SuggestItem = <T,>({
    suggestion,
    getSuggestionValue,
    isActive,
}: SuggestItemProps<T>) => (
    <div
        className={classNames('suggestion-item', {
            isActive,
        })}
    >
        {getSuggestionValue(suggestion)}
    </div>
);
