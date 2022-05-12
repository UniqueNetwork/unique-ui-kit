import { ReactNode } from 'react';
import Loader from '../../../Loader/Loader';

import './SuggestSpinner.scss';

type SuggestSpinnerProps = {
    loadingText: string | ReactNode;
};

export const SuggestSpinner = ({ loadingText }: SuggestSpinnerProps) => (
    <div className={'suggest-spinner'}>
        <Loader label={loadingText} size={'small'} />
    </div>
);
