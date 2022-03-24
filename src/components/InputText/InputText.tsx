/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { ChangeEvent, FC } from 'react';
import classNames from 'classnames';
import { Icon } from '..';
import { ComponentProps, DimentionType, IconProps } from '../../types';
import './InputText.scss';

export interface InputTextProps extends ComponentProps {
    additionalText?: string;
    error?: boolean;
    label?: string;
    statusText?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    value?: string;
    defaultValue?: string;
    role?: 'number' | 'decimal';
    size?: DimentionType;
}

const InputText: FC<InputTextProps> = ({
    id,
    label,
    additionalText,
    statusText,
    className,
    error,
    disabled,
    value = '',
    iconLeft,
    iconRight,
    onChange,
    testid,
    role,
    size = 'middle',
    ...rest
}: InputTextProps) => {
    const icon = iconLeft || iconRight;
    return (
        <div
            className={classNames(
                'unique-input-text',
                `size-${size}`,
                className,
                { error }
            )}
        >
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
                    data-testid={testid}
                    disabled={disabled}
                    value={value}
                    {...(onChange && {
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                            onChange(
                                e.target.value.replace(
                                    role === 'number' ? /[^0-9.]/g : /[]/,
                                    ''
                                )
                            )
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
