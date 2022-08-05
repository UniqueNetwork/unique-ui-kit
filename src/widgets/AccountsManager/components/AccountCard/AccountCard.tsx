import React, { ReactNode } from 'react';
import { Avatar, Icon, Text } from '../../../../components';
import { IAccount } from '../../AccountsManager';
import './AccountCard.scss';
import defaultAvatarSrc from '../../../../assets/static/avatar.jpg';
import { useCopyToClipboard } from '../../../../utils/hooks';

interface AccountCardProps extends IAccount {
    avatarRender?(address: string): ReactNode;
}

export const AccountCard = ({
    name,
    address,
    avatarRender,
}: AccountCardProps) => {
    const shortAddress =
        address && address?.length > 13
            ? `${address.slice(0, 5)}...${address.slice(-5)}`
            : address;

    const [copied, copy] = useCopyToClipboard();

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
                    <div
                        className="address-copy"
                        onClick={(event) => {
                            event.stopPropagation();
                            copy(address!);
                        }}
                        data-testid={`address-copy-${address}`}
                    >
                        <Icon size={16} name="copy" />
                    </div>
                </div>
            </div>
        </div>
    );
};
