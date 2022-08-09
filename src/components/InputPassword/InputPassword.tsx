/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { ForwardedRef, forwardRef, useState } from 'react';
import classNames from 'classnames';
import { InputBaseProps } from '..';
import { userIcon } from '../Icon';
import { ComponentProps } from '../../types';
import './InputPassword.scss';

export type InputPasswordProps = InputBaseProps & ComponentProps;

export const InputPassword = forwardRef(
    (
        {
            id,
            label,
            additionalText,
            statusText,
            className,
            error,
            disabled,
            value = '',
            onChange,
            size = 'middle',
            testid,
            ...rest
        }: InputPasswordProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        const [visibility, setVisibility] = useState<boolean>(false);

        return (
            <div
                className={classNames(
                    'unique-input-password',
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
                    className={classNames('input-wrapper with-icon to-right', {
                        disabled,
                    })}
                >
                    <input
                        type={visibility ? 'text' : 'password'}
                        id={id}
                        disabled={disabled}
                        value={value}
                        ref={ref}
                        data-testid={testid}
                        {...(onChange && {
                            onChange: (e) => onChange(e.target.value),
                        })}
                        {...rest}
                    />
                    {value && userIcon({
                        name: visibility ? 'eye' : 'eye-closed',
                        size: 20,
                        ...{
                            ...(!disabled && {
                                onClick: () => setVisibility(!visibility),
                            }),
                        },
                    })}
                </div>
                {statusText && <div className="status-text">{statusText}</div>}
            </div>
        );
    }
);
