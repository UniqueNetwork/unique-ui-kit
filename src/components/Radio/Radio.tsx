/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { FC } from 'react';
import './Radio.scss';

export interface RadioProps {
    options: { value: string | number; disabled?: boolean }[];
    value: string | number;
    size?: 's' | 'm';
    onChange: (value: number | string) => void;
}

export const Radio: FC<RadioProps> = ({
    options,
    value,
    size = 'm',
    onChange
}: RadioProps) => {
    return (
        <div className="unique-radio-group-wrapper">
            {options.map((radio, index) => {
                return (
                    <div
                        className={classNames(
                            'unique-radio-wrapper',
                            `radio-size-${size}`,
                            {
                                disabled: radio.disabled
                            }
                        )}
                        key={index}
                        {...(!radio.disabled && {
                            onClick: () => onChange(radio.value)
                        })}
                    >
                        <input
                            type="radio"
                            name={radio.value.toString()}
                            id={radio.value.toString()}
                            className="radio"
                            checked={radio.value === value}
                            onChange={(e) => e.preventDefault()}
                        />
                        <span
                            className={classNames('inner', {
                                checked: radio.value === value
                            })}
                        />
                        <label>{radio.value}</label>
                    </div>
                );
            })}
        </div>
    );
};
