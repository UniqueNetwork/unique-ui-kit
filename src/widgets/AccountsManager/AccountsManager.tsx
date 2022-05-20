import React, { FC, ReactNode } from 'react';
import { Dropdown, Icon, Text } from '../../components';
import './AccountsManager.scss';
import { Account, Network } from './types';
import { AccountsManagerDropdown } from './components';

export interface AccountsManagerProps {
    accounts: Account[];
    selectedAccount?: Account;
    networks: Network[];
    activeNetwork?: Network;
    balance: string;
    deposit?: string;
    depositDescription?: ReactNode;
    manageBalanceLinkTitle?: string;
    symbol: string;
    isLoading?: boolean;
    avatarRender?(address: string): ReactNode;
    onNetworkChange?(network: Network): void;
    onAccountChange?(account: Account): void;
    onManageBalanceClick?(): void;
    onCopyAddressClick?(address: string): void;
}

export const AccountsManager: FC<AccountsManagerProps> = (props) => {
    const { selectedAccount, activeNetwork, balance, symbol } = props;
    return (
        <Dropdown
            dropdownRender={() => <AccountsManagerDropdown {...props} />}
            withTriangleIcon
            placement={'right'}
        >
            <div className={'unique-accounts-manager'}>
                <div className={'accounts-manager-selected-account'}>
                    <Text color={'blue-grey-500'} size={'s'}>
                        {selectedAccount?.name}
                    </Text>
                    <Text size={'m'}>{`${balance} ${symbol}`}</Text>
                </div>
                <div className={'accounts-manager-network'}>
                    {activeNetwork && (
                        <Icon {...activeNetwork.icon} size={16} />
                    )}
                </div>
            </div>
        </Dropdown>
    );
};

export default AccountsManager;
