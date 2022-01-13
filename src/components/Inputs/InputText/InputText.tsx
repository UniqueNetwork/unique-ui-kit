/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { ChangeEvent, KeyboardEvent, FC } from 'react';
import classNames from 'classnames';
import { Icon } from '../../';
import { ComponentProps, IconProps } from '../../../types';
import './InputText.scss';

interface InputTextProps extends ComponentProps {
    additionalText?: string;
    error?: boolean;
    label?: string;
    statusText?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    clearBtn?: boolean;
    onClearBtn?: () => void | undefined;
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
    clearBtn,
    onClearBtn,
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
                    'to-clear-btn': clearBtn,
                    disabled
                })}
            >
                {iconLeft && <Icon {...iconLeft} />}
                <input
                    type="text"
                    id={id}
                    disabled={disabled}
                    value={value?.toString()}
                    defaultValue={defaultValue?.toString()}
                    {...(onChange && {
                        onChange: (e: ChangeEvent<HTMLInputElement>) => {
                            onChange(e.target.value);
                        }
                    })}
                    {...rest}
                />
                {clearBtn && (
                    <div className="icon-remove" onClick={onClearBtn}>
                        <Icon name="x-circle" size={16} />
                    </div>
                )}
                {iconRight && <Icon {...iconRight} />}
            </div>
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};

export default InputText;
