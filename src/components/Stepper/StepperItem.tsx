import Text from '../Text/Text';
import { Fragment } from 'react';
import { TBaseStepperProps } from './Stepper';
import classNames from 'classnames';

type StepperItemProps = Pick<TBaseStepperProps, 'onClickStep'> & {
    description: string;
    isActive: boolean;
    step: number;
    isItem: boolean;
};

export const StepperItem = ({
    description,
    isActive,
    step,
    isItem,
    onClickStep,
}: StepperItemProps) => {
    const handleClickStep = () => {
        onClickStep?.(step);
    };

    const stepperItem = (
        <div className={classNames('step-item', { active: isActive })}>
            <div className={'step-content'} onClick={handleClickStep}>
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
