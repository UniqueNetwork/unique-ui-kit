import { ChangeEvent } from 'react';

type ComponentType = HTMLInputElement | HTMLSelectElement | HTMLDivElement;

export interface ComponentProps {
    autoFocus?: boolean;
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    name?: string;
    placeholder?: string;
    value?: string | number | undefined;
    onBlur?(event: ChangeEvent<ComponentType>): void;
    onChange?(event: ChangeEvent<ComponentType>): void;
    onFocus?(event: ChangeEvent<ComponentType>): void;
}
