import { SuggestProps } from '../../Suggest';
import { ReactNode } from 'react';

export type SuggestWrapperProps<T> = Pick<SuggestProps<T>, 'suggestions'> & {
    children(suggest: T[]): ReactNode;
};

export const SuggestWrapper = <T,>({
    children,
    suggestions,
}: SuggestWrapperProps<T>) => <div>{children(suggestions)}</div>;
