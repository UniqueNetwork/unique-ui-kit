import { ReactNode } from 'react';

import './SuggestSpinner.scss';
import { Loader } from '../../../Loader';

type SuggestSpinnerProps = {
    loadingText: string | ReactNode;
};

export const SuggestSpinner = ({ loadingText }: SuggestSpinnerProps) => (
    <div className={'suggest-spinner'}>
        <Loader label={loadingText} size={'small'} />
    </div>
);
