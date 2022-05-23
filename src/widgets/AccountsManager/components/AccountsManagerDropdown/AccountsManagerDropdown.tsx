import React from 'react';
import { Dropdown, Icon, Link, Text, Toggle } from '../../../../components';
import './AccountsManagerDropdown.scss';
import { AccountsManagerProps } from '../../AccountsManager';
import { AccountCard } from '../index';

export const AccountsManagerDropdown = ({
    accounts,
    selectedAccount,
    networks,
    activeNetwork,
    deposit,
    depositDescription,
    manageBalanceLinkTitle,
    balance,
    symbol,
    avatarRender,
    onAccountChange,
    onNetworkChange,
    onManageBalanceClick,
    onCopyAddressClick,
}: AccountsManagerProps) => {
    return (
        <div className={'accounts-manager-dropdown'}>
            <div className={'accounts-manager-accounts'}>
                <Text color={'grey-500'} size={'s'}>
                    Account
                </Text>
                <Dropdown
                    optionKey={'address'}
                    options={accounts}
                    optionRender={(option) => (
                        <AccountCard
                            {...option}
                            avatarRender={avatarRender}
                            onCopyAddressClick={onCopyAddressClick}
                        />
                    )}
                    withTriangleIcon
                    onChange={onAccountChange}
                >
                    <div
                        className={'accounts-select'}
                        data-testid={'accounts-select'}
                    >
                        <AccountCard
                            {...selectedAccount}
                            avatarRender={avatarRender}
                            onCopyAddressClick={onCopyAddressClick}
                        />
                    </div>
                </Dropdown>
            </div>
            <div className={'accounts-manager-wallet'}>
                <Text color={'grey-500'} size={'s'}>
                    Wallet
                </Text>
                <div
                    className={'wallet-content'}
                    data-testid={`wallet-content`}
                >
                    <Text size={'l'}>{`${balance} ${symbol}`}</Text>
                    {deposit && (
                        <Text size={'s'}>{`${deposit} ${symbol}`}</Text>
                    )}
                    {depositDescription}
                    {manageBalanceLinkTitle && (
                        <div
                            className={'wallet-link'}
                            data-testid={`wallet-link`}
                        >
                            <Link
                                onClick={onManageBalanceClick}
                                title={manageBalanceLinkTitle}
                            />
                            <Icon
                                size={12}
                                name={'arrow-right'}
                                color={'var(--color-primary-500)'}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className={'accounts-manager-networks'}>
                <Text color={'grey-500'} size={'s'}>
                    Active network
                </Text>
                {(!networks || networks.length === 0) && activeNetwork && (
                    <div className={'network'}>
                        <Icon {...activeNetwork.icon} size={16} />
                        <Text>{activeNetwork.name}</Text>
                    </div>
                )}
                {networks?.length > 0 && (
                    <div className={'networks-list'}>
                        {networks.map((network) => (
                            <div
                                className={'network'}
                                key={`network-${network.id}`}
                                data-testid={`network-${network.id}`}
                            >
                                <Icon {...network.icon} size={16} />
                                <Text>{network.name}</Text>
                                <Toggle
                                    label={''}
                                    onChange={() => onNetworkChange?.(network)}
                                    on={activeNetwork?.id === network.id}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
