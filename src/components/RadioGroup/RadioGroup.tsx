/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { FC, useState } from 'react';
import './RadioGroup.scss';

export interface RadioGroupProps {
    options: {
        value: string | number;
        disabled?: boolean;
        selected?: boolean;
    }[];
    size?: 's' | 'm';
    align?: 'vertical' | 'horizontal';
    onChange?: () => void;
}

const RadioGroup: FC<RadioGroupProps> = ({
    options,
    onChange,
    size = 's',
    align = 'vertical'
}: RadioGroupProps) => {
    const [value, setValue] = useState(
        (options.filter((option) => option.selected)[0] || options[0])?.value
    );
    return (
        <div className={`unique-radio-group-wrapper ${align}`}>
            {options.map((radio) => (
                <div
                    className={classNames(
                        'unique-radio-wrapper',
                        `radio-size-${size}`,
                        {
                            disabled: radio.disabled
                        }
                    )}
                    key={radio.value}
                    {...(!radio.disabled && {
                        onClick: () => setValue(radio.value)
                    })}
                >
                    <input
                        type="radio"
                        className="radio"
                        checked={radio.value === value}
                        onChange={onChange}
                    />
                    <span
                        className={classNames('inner', {
                            checked: radio.value === value
                        })}
                    />
                    <label>
                        {radio.value}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RadioGroup;
