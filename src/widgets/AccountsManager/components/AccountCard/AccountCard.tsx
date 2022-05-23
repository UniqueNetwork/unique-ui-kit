import React, { ReactNode } from 'react';
import { IAccount } from '../../types';
import { Avatar, Icon, Text } from '../../../../components';
import './AccountCard.scss';
import defaultAvatarSrc from '../../../../assets/static/avatar.jpg';

interface AccountCardProps extends IAccount {
    avatarRender?(address: string): ReactNode;
    onCopyAddressClick?(address: string): void;
}

export const AccountCard = ({
    name,
    address,
    avatarRender,
    onCopyAddressClick,
}: AccountCardProps) => {
    const shortAddress =
        address && address?.length > 13
            ? `${address.slice(0, 5)}...${address.slice(-5)}`
            : address;

    return (
        <div className="account-card">
            {avatarRender && address ? (
                avatarRender(address)
            ) : (
                <Avatar src={defaultAvatarSrc} type="circle" />
            )}
            <div className="account-card-content">
                <Text size="m">{name}</Text>
                <div className="account-card-address">
                    <Text size="s" color="grey-500">
                        {shortAddress}
                    </Text>
                    {onCopyAddressClick && (
                        <div
                            onClick={() =>
                                address && onCopyAddressClick(address)
                            }
                            data-testid={`address-copy-${address}`}
                        >
                            <Icon size={16} name="copy" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
