/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import { ComponentProps } from '../../types';
import { Icon, IconProps } from '../Icon/Icon';
import './InputText.scss';

interface InputTextProps extends ComponentProps {
    additionalText?: string;
    error?: boolean;
    label?: string;
    statusText?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
}

export const InputText: FC<InputTextProps> = ({
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
    ...props
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
                    id={id}
                    disabled={disabled}
                    value={value?.toString()}
                    defaultValue={defaultValue?.toString()}
                    type="text"
                    {...props}
                />
                {icon && <Icon {...icon} />}
            </div>
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};
