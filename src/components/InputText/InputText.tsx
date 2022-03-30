/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { ChangeEvent, FC } from 'react';
import classNames from 'classnames';
import { Icon } from '..';
import {
    ComponentProps,
    ComponentType,
    DimentionType,
    IconProps
} from '../../types';
import './InputText.scss';

interface InputTextPropsBase {
    additionalText?: string;
    error?: boolean;
    label?: string;
    statusText?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    role?: 'number' | 'decimal';
    size?: DimentionType;
}

interface TextareaPropsBase {
    // number of rows to display in textarea
    rows?: number;
}

export type InputTextProps = InputTextPropsBase &
    ComponentProps &
    TextareaPropsBase;

const TextComponentBase = ({
    rows,
    ...props
}: Omit<ComponentProps, 'onChange'> & TextareaPropsBase) =>
    rows ? (
        <textarea rows={rows} {...props} />
    ) : (
        <input type={'text'} {...props} />
    );

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
                <TextComponentBase
                    id={id}
                    data-testid={testid}
                    disabled={disabled}
                    value={value}
                    {...(onChange && {
                        onChange: (
                            e: ChangeEvent<
                                HTMLTextAreaElement | HTMLInputElement
                            >
                        ) =>
                            onChange(
                                e.target.value.replace(
                                    role === 'number' ? /\D/g : /[]/,
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
