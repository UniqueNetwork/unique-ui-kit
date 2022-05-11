import { SuggestProps } from '../../Suggest';
import { Fragment, ReactNode } from 'react';

export type SuggestListProps<T> = Pick<SuggestProps<T>, 'suggestions'> & {
    children(suggest: T, isLast: boolean): ReactNode;
};

export const SuggestList = <T,>({
    suggestions,
    children,
}: SuggestListProps<T>) => (
    <>
        {suggestions.map((suggest, idx) => (
            <Fragment key={idx}>
                {children(suggest, idx === suggestions.length - 1)}
            </Fragment>
        ))}
    </>
);
