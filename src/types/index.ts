import { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

export type ComponentType =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLDivElement;

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
    testid?: string;
    onChange(value: string | number | undefined): void;
    onBlur?(event: ChangeEvent<ComponentType>): void;
    onFocus?(event: ChangeEvent<ComponentType>): void;
    onKeyDown?(event: KeyboardEvent<ComponentType>): void;
}

export interface IconProps {
    size: number;
    name?: string;
    file?: string;
    color?: string;
}

export interface BreadcrumbsProps {
    options: { title: string; link?: string }[];
}

export interface TableColumnProps {
    title: string;
    width: string;
    field: string;
    render?(data: any): ReactNode;
}

export interface TableProps {
    columns: TableColumnProps[];
    data: any[];
}

export interface ButtonProps {
    title: string;
    disabled?: boolean;
    size?: 's' | 'm';
    role?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'danger';
    wide?: boolean;
    className?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    onClick: () => void;
}
