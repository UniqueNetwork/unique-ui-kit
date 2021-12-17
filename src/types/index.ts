import { ChangeEvent } from 'react';

type ComponentType = HTMLInputElement | HTMLSelectElement | HTMLDivElement;

export interface ComponentProps {
    autoFocus?: boolean;
    className?: string;
    defaultValue?: string | number;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    name?: string;
    placeholder?: string;
    tabIndex?: number;
    value?: string | number | undefined;
    onBlur?(event: ChangeEvent<ComponentType>): void;
    onChange?(value: string | number | undefined): void;
    onFocus?(event: ChangeEvent<ComponentType>): void;
}

export interface IconProps {
    name: string;
    size: number;
    color?: string;
}

export interface BreadcrumbsProps {
    options: { title: string; link?: string }[];
}
