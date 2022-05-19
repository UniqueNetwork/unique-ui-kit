import { IconProps, SelectOptionProps } from '../../types';

export interface Account extends SelectOptionProps {
    address?: string;
    name?: string;
}

export interface Network {
    id: string;
    name: string;
    icon: IconProps;
}
