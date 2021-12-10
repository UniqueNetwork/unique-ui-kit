/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { FC, useState, ChangeEvent, ReactNode, ReactElement } from 'react';
import './Radio.scss';

type TRadioSize = 's' | 'm';

export interface RadioProps {
    groupName?: string;
    id?: string;
    value: string | number;
    checked?: boolean;
    size?: TRadioSize;
    disabled: boolean;
    onClick?: (value: number | string) => void;
}

export const Radio: FC<RadioProps> = (props: RadioProps) => {
    const { groupName, value, size, checked, disabled, onClick } = props;

    return (
        <div
            className={classNames(
                'unique-radio-wrapper',
                `radio-size-${size}`,
                {
                    disabled
                }
            )}
            {...(!disabled && {
                onClick: () => onClick!(value)
            })}
        >
            <input
                type="radio"
                name={groupName}
                id={value.toString()}
                className="radio"
                checked={checked}
                onChange={(e) => e.preventDefault()}
            />
            <span
                className={classNames('inner', {
                    checked
                })}
            />
            <label>{value}</label>
        </div>
    );
};

export interface RadioGroupProps {
    children: ReactElement<RadioProps>[];
    groupName: string;
    size?: TRadioSize;
    onChange?: (
        value: number | string
    ) => void;
}

export const RadioGroup: FC<RadioGroupProps> = ({
    children,
    groupName,
    size = 'm',
    onChange
}: RadioGroupProps) => {
    const [currentValue, setcurrentValue] = useState('');

    const handleChange = (event: number | string) => {
        setcurrentValue(event.toString());

        if (onChange) {
            onChange(event);
        }
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        
        if (React.isValidElement(child)) {
            const checked = child.props.value === currentValue;

            return React.cloneElement(child, {
                ...child.props,
                checked,
                groupName,
                size,
                onClick: handleChange
            });
        }
        return child;
    });

    return (
        <div className="unique-radio-group-wrapper">{childrenWithProps}</div>
    );
};
