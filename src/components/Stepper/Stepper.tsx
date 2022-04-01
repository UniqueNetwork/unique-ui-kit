/**
 * @author Sergey Kozlov <skozlov@usetech.com>
 */

import React, { Fragment } from 'react';

import './Stepper.scss';
import { StepperItem } from './StepperItem';

export type TBaseStepperProps = {
    activeStep: number;
    steps: string[];
};

function Stepper({ activeStep, steps }: TBaseStepperProps) {
    return (
        <div className="stepper-main">
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
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Stepper;
