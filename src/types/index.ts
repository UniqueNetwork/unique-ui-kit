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
