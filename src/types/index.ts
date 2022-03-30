import { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

export type DimentionType = 'small' | 'middle' | 'large';

export type ComponentType =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLDivElement;

export interface ComponentProps {
    autoFocus?: boolean;
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    name?: string;
    placeholder?: string;
    tabIndex?: number;
    value?: string | undefined;
    testid?: string;
    onChange(value: SelectOptionProps | string | undefined): void;
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
    iconLeft?: IconProps;
    iconRight?: IconProps;
    isSortable?: boolean;
    render?(data: any): ReactNode;
    compareFunc?: (a: any, b: any) => number;
}

export interface SortQuery {
    field: string;
    mode: number;
}

export interface TableProps {
    columns: TableColumnProps[];
    data: TableRow[];
    onSort?(sorting: SortQuery): void;
}

export interface TableRow {
    [key: string]: string | {};
}

export interface ButtonProps {
    title: string;
    disabled?: boolean;
    size?: DimentionType;
    role?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'danger';
    wide?: boolean;
    className?: string;
    iconLeft?: IconProps;
    iconRight?: IconProps;
    onClick: () => void;
}

export interface SelectOptionProps {
    [x: string | number | symbol]: unknown;
    iconLeft?: IconProps;
    iconRight?: IconProps;
}
