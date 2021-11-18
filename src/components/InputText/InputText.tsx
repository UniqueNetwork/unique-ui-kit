import React, { FC } from 'react';
import classNames from 'classnames';
import { ComponentProps } from '../../types';
import './InputText.scss';

interface InputTextProps extends ComponentProps {
    additionalText?: string;
    error?: boolean;
    label?: string;
    statusText?: string;
}

export const InputText: FC<InputTextProps> = ({
    id,
    label,
    additionalText,
    statusText,
    className,
    error,
    disabled,
    ...props
}: InputTextProps) => (
    <div className={classNames('unique-input-text', className, { error })}>
        {label && <label htmlFor={id}>{label}</label>}
        {additionalText && (
            <div className="additional-text">{additionalText}</div>
        )}
        <div className={classNames('input-wrapper', { disabled })}>
            <input id={id} disabled={disabled} type="text" {...props} />
        </div>
        {statusText && <div className="status-text">{statusText}</div>}
    </div>
);
