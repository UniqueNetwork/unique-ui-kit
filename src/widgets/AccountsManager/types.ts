import { IconProps, SelectOptionProps } from '../../types';

export interface IAccount extends SelectOptionProps {
    address?: string;
    name?: string;
}

export interface INetwork {
    id: string;
    name: string;
    icon: IconProps;
}
