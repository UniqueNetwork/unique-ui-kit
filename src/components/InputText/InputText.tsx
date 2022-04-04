/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */
import classNames from 'classnames';
import { Icon } from '..';
import { ComponentProps, IconProps, InputPropsBase } from '../../types';
import './InputText.scss';

export type InputTextProps = InputPropsBase &
    Omit<ComponentProps, 'onChange'> & {
        iconLeft?: IconProps;
        iconRight?: IconProps;
        role?: 'number' | 'decimal';
    };

const InputText = ({
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
                    disabled,
                })}
            >
                <input
                    type={'text'}
                    id={id}
                    data-testid={testid}
                    disabled={disabled}
                    value={value}
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
                {icon && <Icon {...icon} />}
            </div>
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};

export default InputText;
