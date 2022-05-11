/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */
import classNames from 'classnames';
import { Icon } from '..';
import { ComponentProps, IconProps, InputPropsBase } from '../../types';
import './InputText.scss';
import { ForwardedRef, forwardRef, ReactNode, isValidElement } from 'react';

type IconType = IconProps | ReactNode;

export type InputTextProps = InputPropsBase &
    Omit<ComponentProps, 'onChange'> & {
        iconLeft?: IconType;
        iconRight?: IconType;
        role?: 'number' | 'decimal';
    };

const InputText = forwardRef(
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

export default InputText;
