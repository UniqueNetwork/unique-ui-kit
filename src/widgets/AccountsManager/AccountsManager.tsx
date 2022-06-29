import React, { ReactNode } from 'react';
import { Dropdown, Icon, IconProps, Text } from '../../components';
import { SelectOptionProps } from '../../types';
import { AccountsManagerDropdown } from './components';
import './AccountsManager.scss';

export interface IAccount extends SelectOptionProps {
    address?: string;
    name?: string;
}

export interface INetwork {
    id: string;
    name: string;
    icon: IconProps;
}

export interface AccountsManagerProps {
    open?: boolean;
    accounts: IAccount[];
    selectedAccount?: IAccount;
    networks: INetwork[];
    activeNetwork?: INetwork;
    balance: string;
    deposit?: string;
    depositDescription?: ReactNode;
    manageBalanceLinkTitle?: string;
    symbol: string;
    isLoading?: boolean;
    avatarRender?(address: string): ReactNode;
    onNetworkChange?(network: INetwork): void;
    onAccountChange?(account: IAccount): void;
    onManageBalanceClick?(): void;
    onCopyAddressClick?(address: string): void;
    onOpenChange?(open: boolean): void;
}

export const AccountsManager = (props: AccountsManagerProps) => {
    const {
        open,
        selectedAccount,
        activeNetwork,
        balance,
        symbol,
        onCopyAddressClick,
        onOpenChange,
    } = props;
    return (
        <Dropdown
            dropdownRender={() => <AccountsManagerDropdown {...props} />}
            iconRight={{
                name: 'triangle',
                size: 8,
            }}
            placement="right"
            open={open}
            onOpenChange={onOpenChange}
        >
            <div className="unique-accounts-manager">
                <div className="accounts-manager-selected-account">
                    <div className="accounts-manager-selected-account-name">
                        <Text color="blue-grey-500" size="s">
                            {selectedAccount?.name}
                        </Text>
                        <div
                            className="address-copy"
                            onClick={(event) => {
                                event.stopPropagation();
                                selectedAccount?.address &&
                                    onCopyAddressClick?.(
                                        selectedAccount.address
                                    );
                            }}
                            data-testid={`selected-address-copy-${selectedAccount?.address}`}
                        >
                            <Icon size={16} name="copy" />
                        </div>
                    </div>
                    <Text size="s">{`${balance} ${symbol}`}</Text>
                </div>
                <div className="accounts-manager-network">
                    {activeNetwork && (
                        <Icon {...activeNetwork.icon} size={16} />
                    )}
                </div>
            </div>
        </Dropdown>
    );
};
