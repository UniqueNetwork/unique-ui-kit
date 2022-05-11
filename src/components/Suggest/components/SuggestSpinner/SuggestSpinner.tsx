import { ReactNode } from 'react';

import './SuggestSpinner.scss';

type SuggestSpinnerProps = {
    loadingText: string | ReactNode;
};

export const SuggestSpinner = ({ loadingText }: SuggestSpinnerProps) => (
    <div className={'suggest-spinner'} role={'progressbar'}>
        {loadingText}
    </div>
);
