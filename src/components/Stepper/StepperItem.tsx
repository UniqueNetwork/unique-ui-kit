import Text from '../Text/Text';
import React, { Fragment } from 'react';

type StepperItemProps = {
    description: string;
    isActive: boolean;
    step: number;
    isItem: boolean;
};

export const StepperItem = ({
    description,
    isActive,
    step,
    isItem
}: StepperItemProps) => {
    const stepperItem = (
        <div className={`step-item ${isActive ? 'active' : 'inactive'}`}>
            <div className={'step-content'}>
                <Text
                    color={'color-additional-light'}
                    weight="medium"
                    size={'l'}
                    className={'step-number'}
                >
                    {step}
                </Text>
                <div className={'step-description-wrapper'}>
                    <Text
                        weight="medium"
                        color={'color-blue-grey-500'}
                        className={'step-description'}
                    >
                        {description}
                    </Text>
                </div>
            </div>
        </div>
    );
    if (isItem) {
        return (
            <Fragment key={step}>
                {stepperItem}
                <div className={'step-item middle'} />
            </Fragment>
        );
    }
    return stepperItem;
};
