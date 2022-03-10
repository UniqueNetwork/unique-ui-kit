/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Icon } from '../../components';
import { ComponentProps, IconProps } from '../../types';
import './Menu.scss';

type tokenProps = {
    id: string | number;
    title: string;
    abbreviation: string;
    icon?: IconProps;
};
type rateProps = {
    id: string | number;
    abbreviation: string;
    rate: number;
};

type accountProps = {
    id: string | number;
    account: string;
    address: string;
}


interface MenuProps extends ComponentProps {
    accounts: accountProps[];
    account: accountProps | undefined | string;
    token: tokenProps | undefined;
    rate: rateProps | undefined | string;
    tokens: tokenProps[];
    rates: rateProps[];
    error?: boolean;
    onChangeToken(value: string | number | undefined): void;
    onChangeRate(value: string | number | undefined): void;
    onChangeAccount(value: string | number | undefined): void;
}

const Menu = ({
    account,
    accounts,
    id,
    tokens,
    token,
    rate,
    value,
    autoFocus,
    className,
    defaultValue,
    error,
    rates,
    disabled,
    tabIndex = -1,
    onChange,
    onChangeAccount,
    onChangeToken,
    onChangeRate,
    onFocus,
    onBlur
}: MenuProps) => {
    useEffect(() => {
        if (
            defaultValue &&
            tokens.findIndex((option) => option.title === defaultValue)
        ) {
            onChange(defaultValue);
        } else {
            console.log('op', tokens[0]);
            onChange(tokens[0].id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (
            defaultValue &&
            rates.findIndex((option) => option.abbreviation === defaultValue)
        ) {
            onChange(defaultValue);
        } else {
            console.log('op', rates[0]);
            onChange(rates[0].id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (
            defaultValue &&
            accounts.findIndex((option) => option.account === defaultValue)
        ) {
            onChange(defaultValue);
        } else {
            console.log('op', accounts[0]);
            onChange(accounts[0].id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selected = tokens.find((option) => option.id === value) || tokens[0];
    const selectedAccount = accounts.find((option) => option.id === account) || accounts[0];
    const selectedRate = rates.find((option) => option.id === rate) || rates[0];
    const icon = selected?.icon;

    const [droppedToken, setDroppedToken] = useState<boolean>(!!autoFocus);
    const [droppedAccount, setDroppedAccount] = useState<boolean>(!!autoFocus);
    const [droppedRate, setDroppedRate] = useState<boolean>(!!autoFocus);

    const handleMouseDown = () => {
        !disabled && setDroppedToken(!droppedToken);
        !disabled && setDroppedRate(false);
    };
    const handleMouseDownRate = () => {
        !disabled && setDroppedRate(!droppedRate);
        !disabled && setDroppedAccount(false);
    };
    const handleMouseDownAccount = () => {
        !disabled && setDroppedAccount(!droppedAccount);
        !disabled && setDroppedRate(false);
    }

    const handleClickOutside = () => {
        document.removeEventListener('mousedown', handleClickOutside);
        setDroppedToken(false);
        setDroppedRate(false);
        setDroppedAccount(false);
    };

    const handleMouseLeave = () => {
        document.addEventListener('mousedown', handleClickOutside);
    };

    const handleMouseEnter = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

    const setChanges = () => {
        setDroppedAccount(false);
        setDroppedToken(false);
        setDroppedRate(false);
        onChange!(value);
    };

    const handleAccountChange = (value: string | number | undefined) => {
        setChanges();
        onChangeAccount(value);
    };

    const handleRateChange = (value: string | number | undefined) => {
        setChanges();
        onChangeRate(value);
    };
    return (
        <div className="main-wrapper">
            <div className={classNames('unique-menu', className, { error })}>
                <div
                    className={classNames('menu-wrapper menu-token', {
                        droppedToken,
                        droppedAccount,
                        droppedRate,
                        disabled
                    })}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    tabIndex={tabIndex}
                    id={id}
                >
                    <div
                        className="selected selected-rate1"
                        onMouseDown={handleMouseDownAccount}
                    >
                        <div className="selected-rate-wrapper">
                            <div className="wrapper-style">
                                <span className="rate-style">
                                    {selectedAccount.account}
                                </span>
                                <span className="separate-rate" />
                                <span className="address-style">
                                    {selectedAccount.address}
                                </span>
                            </div>
                        </div>
                        <Icon name="triangle" size={8} />
                    </div>
                    {droppedAccount && accounts && (
                        <div className="menu-dropdown-rate1">
                            {accounts.map((optionAccount) => {
                                return (
                                    <div
                                        className={classNames(
                                            'dropdown-option1',
                                            {
                                                selectedAccount:
                                                    selectedAccount &&
                                                    optionAccount.id ==
                                                        selectedAccount.id,
                                                'with-rate':
                                                    optionAccount.account,
                                                disabled
                                            }
                                        )}
                                        key={optionAccount.id}
                                        onClick={() =>
                                            handleAccountChange(
                                                optionAccount.id
                                            )
                                        }
                                    >   
                                        <div className='wrapper-style'>
                                        <span className="rate-style">
                                            {optionAccount.account}
                                        </span>
                                        <span className="separate-rate" />
                                        <span className="address-style">
                                            {optionAccount.address}
                                        </span>
                                    </div>
                                    </div>
                                );
                            })}
                           
                        </div>
                    )}

                    <div
                        className="selected selected-token"
                        onMouseDown={handleMouseDownAccount}
                    >
                        <span className="separate" />
                    </div>

                    {/* ssssssssssssssssssssssssssssssssssssssssssssss */}

                    {/* ssssssssssssssssssssssssssssssssssssssssssssss */}
                    <div
                        className="selected selected-rate"
                        onMouseDown={handleMouseDownRate}
                    >
                        <div className="selected-rate-wrapper">
                            <div>
                                <span className="rate-style">
                                    {selectedRate.rate}
                                </span>
                                <span className="separate-rate" />
                                <span className="abbreviation-style">
                                    {selectedRate.abbreviation}
                                </span>
                            </div>
                            <div className="quartz-style">
                                Quartz blockchain
                            </div>
                        </div>
                        <Icon name="triangle" size={8} />
                    </div>
                    {droppedRate && rates && (
                        <div className="menu-dropdown-rate">
                            {rates.map((optionRate) => {
                                return (
                                    <div
                                        className={classNames(
                                            'dropdown-option',
                                            {
                                                selectedRate:
                                                    selectedRate &&
                                                    optionRate.id ==
                                                        selectedRate.id,
                                                'with-rate':
                                                    optionRate.abbreviation,
                                                disabled
                                            }
                                        )}
                                        key={optionRate.id}
                                        onClick={() =>
                                            handleRateChange(optionRate.id)
                                        }
                                    >
                                        <span className="rate-style">
                                            {optionRate.rate}
                                        </span>
                                        <span className="separate-rate" />
                                        <span className="abbreviation-style">
                                            {optionRate.abbreviation}
                                        </span>
                                    </div>
                                );
                            })}
                            <div className="withdraw-wrapper">
                                <span className="bottom-text">
                                    (market deposit)
                                </span>
                                <div className="wrap-withdraw">
                                    <button className="withdraw-btn">
                                        Withdraw
                                    </button>

                                    <Icon
                                        name="withdraw"
                                        size={24}
                                        color={'#009CF0'}
                                    />
                                </div>

                                <div className="text-wrap">
                                    <div>
                                        Learn more in
                                        <a href="https://market.dev.uniquenetwork.dev/#/faq">
                                            <span className="faq-txt">FAQ</span>
                                        </a>
                                    </div>
                                    <Icon
                                        name="triangle"
                                        size={9}
                                        color={'#000000CC'}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <span className="separate" />
                    <div
                        className="selected selected-token"
                        onMouseDown={handleMouseDown}
                    >
                        <Icon name="settings" size={22} />
                    </div>
                </div>
            </div>

            {/* <div className={classNames('unique-menu', className, { error })}>
                <div
                    className={classNames('menu-wrapper menu-token', {
                        droppedAccount,
                        disabled
                    })}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    tabIndex={tabIndex}
                    id={id}
                >
                    <div
                        className="selected selected-rate"
                        onMouseDown={handleMouseDownAccount}
                    >
                        <div className="selected-rate-wrapper">
                            <div>
                                <span className="rate-style">
                                    {selectedAccount.address}
                                </span>
                                <span className="separate-rate" />
                            </div>
                        </div>
                        <Icon name="triangle" size={8} />
                    </div>
                    {droppedAccount && accounts && (
                        <div className="menu-dropdown-rate">
                            {accounts.map((optionAccount) => {
                                return (
                                    <div
                                        className={classNames(
                                            'dropdown-option',
                                            {
                                                selectedRate:
                                                    selectedRate &&
                                                    optionAccount.id ==
                                                        selectedRate.id,
                                                'with-rate':
                                                    optionAccount.address,
                                                disabled
                                            }
                                        )}
                                        key={optionAccount.id}
                                        onClick={() =>
                                            handleAccountChange(
                                                optionAccount.id
                                            )
                                        }
                                    >
                                        <span className="rate-style">
                                            {optionAccount.address}
                                        </span>
                                        <span className="separate-rate" />
                                        <span className="abbreviation-style">
                                            {optionAccount.address}
                                        </span>
                                    </div>
                                );
                            })}
                            <div className="withdraw-wrapper">
                                <span className="bottom-text">
                                    (market deposit)
                                </span>
                                <div className="wrap-withdraw">
                                    <button className="withdraw-btn">
                                        Withdraw
                                    </button>

                                    <Icon
                                        name="withdraw"
                                        size={24}
                                        color={'#009CF0'}
                                    />
                                </div>

                                <div className="text-wrap">
                                    <div>
                                        Learn more in
                                        <a href="https://market.dev.uniquenetwork.dev/#/faq">
                                            <span className="faq-txt">FAQ</span>
                                        </a>
                                    </div>
                                    <Icon
                                        name="triangle"
                                        size={9}
                                        color={'#000000CC'}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <span className="separate" />
                    <div className="selected selected-token">
                        
                    </div>
                    {droppedToken && accounts && (
                        <div className="menu-dropdown">
                            {tokens.map((option) => {
                                return (
                                    <div
                                        className={classNames(
                                            'dropdown-option',
                                            {
                                                selected:
                                                    selected &&
                                                    option.id === selected.id,
                                                'with-icon': option.icon,
                                                disabled
                                            }
                                        )}
                                        key={option.id}
                                        onClick={() =>
                                            handleOptionSelect(option.id)
                                        }
                                    >
                                        {<Icon {...option.icon} />}
                                        {option.title}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default Menu;

