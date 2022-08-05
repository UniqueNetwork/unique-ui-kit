import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { AccountsManager } from '../index';

const mockProps = {
    selectedAccount: {
        name: 'hrumhrum10',
        address: '5Gxot0000000000000000000000004Y6cj',
    },
    activeNetwork: {
        id: 'quartz',
        name: 'Quartz',
        icon: { name: 'chain-quartz', size: 40 },
    },
    balance: '98989888.0089',
    deposit: '0.008',
    depositDescription:
        'The total market deposit for participation in auctions and sponsorship.',
    manageBalanceLinkTitle: 'Manage my balance',
    symbol: 'KSM',
    accounts: [
        {
            name: 'hrumhrum10',
            address: '5Gxot0000000000000000000000004Y6cj',
        },
        {
            name: 'hrumhrum99',
            address: '5Gdfg0000000000000000000000005B36l',
        },
    ],
    networks: [
        {
            id: 'quartz',
            name: 'Quartz',
            icon: { name: 'chain-quartz', size: 40 },
        },
        {
            id: 'opal',
            name: 'Opal',
            icon: { name: 'chain-opal', size: 40 },
        },
    ],
};

it('should correct render props', () => {
    const { getByText } = render(<AccountsManager {...mockProps} />);

    expect(getByText(mockProps.selectedAccount.name)).toBeInTheDocument();
    expect(
        getByText(`${mockProps.balance} ${mockProps.symbol}`)
    ).toBeInTheDocument();
});

it('should correct render props in dropdown', () => {
    const { getByTestId, getByText } = render(
        <AccountsManager {...mockProps} />
    );

    const dropdown = getByTestId('dropdown-wrapper');
    fireEvent.click(dropdown);

    expect(getByTestId('wallet-content')).toBeInTheDocument();
    expect(
        getByText(`${mockProps.deposit} ${mockProps.symbol}`)
    ).toBeInTheDocument();
    expect(getByText(mockProps.depositDescription)).toBeInTheDocument();
    expect(getByTestId('wallet-link')).toBeInTheDocument();
});

it('should change account by select', () => {
    const mockFunction = jest.fn();
    const { getByTestId, getByText } = render(
        <AccountsManager {...mockProps} onAccountChange={mockFunction} />
    );

    const dropdown = getByTestId('dropdown-wrapper');
    fireEvent.click(dropdown);
    const accountsSelect = getByTestId('accounts-select');
    fireEvent.click(accountsSelect);

    const option = getByText(mockProps.accounts[1].name);
    fireEvent.click(option);
    expect(mockFunction.mock.calls.length).toBe(1);
    expect(mockFunction).toHaveBeenCalledWith(mockProps.accounts[1]);
});

it('should change network by toggle', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
        <AccountsManager {...mockProps} onNetworkChange={mockFunction} />
    );

    const dropdown = getByTestId('dropdown-wrapper');
    fireEvent.click(dropdown);

    const networkToggle = getByTestId(`network-${mockProps.networks[1].id}`);
    fireEvent.click(
        networkToggle.getElementsByClassName('unique-toggle-wrapper')[0]
    );
    expect(mockFunction.mock.calls.length).toBe(1);
    expect(mockFunction).toHaveBeenCalledWith(mockProps.networks[1]);
});

it('should copy account address', async () => {
    Object.defineProperty(navigator, 'clipboard', {
        value: {
            writeText: jest.fn(),
        },
    });
    const { getByTestId } = render(<AccountsManager {...mockProps} />);

    const dropdown = getByTestId('dropdown-wrapper');
    fireEvent.click(dropdown);

    const copyIcon = getByTestId(
        `address-copy-${mockProps.selectedAccount.address}`
    );
    act(() => {
        fireEvent.click(copyIcon);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        mockProps.selectedAccount.address
    );
});

it('should have clickable link to balance manager', () => {
    const mockFunction = jest.fn();
    const { getByText, getByTestId } = render(
        <AccountsManager {...mockProps} onManageBalanceClick={mockFunction} />
    );

    const dropdown = getByTestId('dropdown-wrapper');
    fireEvent.click(dropdown);

    const link = getByText(mockProps.manageBalanceLinkTitle);
    fireEvent.click(link);
    expect(mockFunction.mock.calls.length).toBe(1);
});
