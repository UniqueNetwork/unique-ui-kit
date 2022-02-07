/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import classNames from 'classnames';
import React, { ChangeEvent, FC, KeyboardEvent } from 'react';
import { Icon } from '..';
import { ComponentProps, IconProps } from '../../types';
import './InputText.scss';

interface InputTextProps extends ComponentProps {
    additionalText?: string;
    error?: boolean;
    label?: string;
    statusText?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    value?: string;
    defaultValue?: string;
}

const InputText: FC<InputTextProps> = ({
    id,
    label,
    additionalText,
    statusText,
    className,
    error,
    disabled,
    value,
    defaultValue,
    iconLeft,
    iconRight,
    onChange,
    ...rest
}: InputTextProps) => {
    const icon = iconLeft || iconRight;
    return (
        <div className={classNames('unique-input-text', className, { error })}>
            {label && <label htmlFor={id}>{label}</label>}
            {additionalText && (
                <div className="additional-text">{additionalText}</div>
            )}
            <div
                className={classNames('input-wrapper', {
                    'with-icon': icon,
                    'to-left': iconLeft,
                    'to-right': iconRight,
                    disabled
                })}
            >
                <input
                    type="text"
                    id={id}
                    disabled={disabled}
                    value={value || ''}
                    defaultValue={defaultValue || ''}
                    {...(onChange && {
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                            onChange(e.target.value)
                    })}
                    {...rest}
                />
                {icon && <Icon {...icon} />}
            </div>
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};

export default InputText;
