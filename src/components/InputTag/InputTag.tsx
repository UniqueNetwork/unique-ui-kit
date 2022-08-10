import classNames from 'classnames';
import { ComponentProps } from '../../types';
import { TagsInput } from 'react-tag-input-component';
import { InputBaseProps } from '../InputText';
import './InputTag.scss';

export type InputTagProps = Omit<InputBaseProps, 'onChange'> &
    Omit<
        ComponentProps,
        | 'value'
        | 'onChange'
        | 'defaultValue'
        | 'autoFocus'
        | 'onFocus'
        | 'onKeyDown'
        | 'tabIndex'
        | 'maxLength'
    > & {
        value?: string[];
        onChange?: (tags: string[]) => void;
        seprators?: string[];
        onExisting?: (tag: string) => void;
        onRemoved?: (tag: string) => void;
        disabled?: boolean;
        isEditOnRemove?: boolean;
        beforeAddValidate?: (tag: string, existingTags: string[]) => boolean;
    };

export const InputTag = ({
    id,
    label,
    additionalText,
    statusText,
    className,
    size = 'middle',
    testid,
    error,
    disabled,
    ...rest
}: InputTagProps) => {
    return (
        <div
            className={classNames(
                'unique-input-tag',
                `size-${size}`,
                className,
                { error, disabled }
            )}
            id={id}
            data-testid={testid}
        >
            {label && <label htmlFor={id}>{label}</label>}
            {additionalText && (
                <div className="additional-text">{additionalText}</div>
            )}
            <TagsInput {...rest} disabled={disabled} />
            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};
