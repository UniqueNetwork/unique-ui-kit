/**
 * @author Sergey Kozlov <skozlov@usetech.com>
 */

import React, { Fragment } from 'react';
import { StepperItem } from './StepperItem';

import './Stepper.scss';

export type TBaseStepperProps = {
    activeStep: number;
    steps: string[];
    onClickStep?(activeStep: number): void;
};

const Stepper = ({ activeStep, steps, onClickStep }: TBaseStepperProps) => {
    return (
        <div className="unique-stepper">
            <div className="steps">
                {steps.map((description, index) => {
                    const step = index + 1;
                    return (
                        <StepperItem
                            key={step}
                            step={step}
                            description={description}
                            isActive={activeStep === step}
                            isItem={steps.length === 2 && index === 0}
                            onClickStep={onClickStep}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Stepper;
