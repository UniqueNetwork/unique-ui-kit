/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */
import classNames from 'classnames';
import { Icon } from '..';
import { ComponentProps, DimentionType } from '../../types';
import './InputText.scss';
import { ForwardedRef, forwardRef, ReactNode, isValidElement } from 'react';
import { IconProps } from '../Icon';

type IconType = IconProps | ReactNode;

export interface InputBaseProps {
    additionalText?: string;
    error?: boolean;
    label?: ReactNode;
    statusText?: string;
    size?: DimentionType;
    onChange?(value: string): void;
}

export type InputTextProps = InputBaseProps &
    Omit<ComponentProps, 'onChange'> & {
        iconLeft?: IconType;
        iconRight?: IconType;
        role?: 'number' | 'decimal';
    };

export const InputText = forwardRef(
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
            iconLeft,
            iconRight,
            onChange,
            testid,
            role,
            size = 'middle',
            ...rest
        }: InputTextProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        const userIcon = (icon: IconType) =>
            isValidElement(icon)
                ? icon
                : icon && <Icon {...(icon as IconProps)} />;

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
                        'with-icon': iconLeft || iconRight,
                        'to-left': iconLeft,
                        'to-right': iconRight,
                        disabled,
                    })}
                >
                    {userIcon(iconLeft)}
                    <input
                        type={'text'}
                        id={id}
                        data-testid={testid}
                        disabled={disabled}
                        value={value}
                        ref={ref}
                        {...(onChange && {
                            onChange: (e) =>
                                onChange(
                                    e.target.value.replace(
                                        role === 'number' ? /\D/g : /[]/,
                                        ''
                                    )
                                ),
                        })}
                        {...rest}
                    />
                    {userIcon(iconRight)}
                </div>
                {statusText && <div className="status-text">{statusText}</div>}
            </div>
        );
    }
);
