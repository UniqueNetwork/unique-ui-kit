/**
 * @author Sergey Kozlov <skozlov@usetech.com>
 */
import classNames from 'classnames';
import { Icon } from '..';
import { ComponentProps, SelectOptionProps, InputPropsBase } from '../../types';
import './Textarea.scss';

interface TextareaPropsBase extends InputPropsBase {
    // number of rows to display in textarea
    rows?: number;
}

export type TextareaProps = TextareaPropsBase &
    Omit<ComponentProps, 'onChange'>;

const Textarea = ({
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
    rows = 3,
    ...rest
}: TextareaProps) => {
    const icon = iconLeft || iconRight;
    return (
        <div
            className={classNames(
                'unique-textarea-text',
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
                className={classNames('textarea-wrapper', {
                    'with-icon': icon,
                    'to-left': iconLeft,
                    'to-right': iconRight,
                    disabled
                })}
            >
                <textarea
                    id={id}
                    data-testid={testid}
                    disabled={disabled}
                    value={value}
                    rows={rows}
                    {...(onChange && {
                        onChange: (e) =>
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

export default Textarea;
