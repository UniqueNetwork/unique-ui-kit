/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import { FC } from 'react';
import './Radios.scss';

export interface RadiosProps {
    options: { value: string | number; disabled?: boolean }[];
    selected: string | number;
    onChange: (value: number | string) => void;
    size?: 's' | 'm';
}

export const Radios: FC<RadiosProps> = ({
    options,
    selected,
    onChange,
    size = 'm'
}: RadiosProps) => (
    <div className="unique-radios-group-wrapper">
        {options.map((radio, index) => {
            return (
                <div
                    className={classNames(
                        'unique-radios-wrapper',
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
                        checked={radio.value === selected}
                        onChange={(e) => e.preventDefault()}
                    />
                    <span
                        className={classNames('inner', {
                            checked: radio.value === selected
                        })}
                    />
                    <label>{radio.value}</label>
                </div>
            );
        })}
    </div>
);
