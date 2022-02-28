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

interface MenuProps extends ComponentProps {
    token: tokenProps | undefined;
    rate: rateProps | undefined;
    tokens: tokenProps[];
    rates: rateProps[];
    error?: boolean;
    onChangeToken(value: string | number | undefined): void;
    onChangeRate(value: string | number | undefined): void;
}

const Menu = ({
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
    const selected = tokens.find((option) => option.id === value) || tokens[0];
    const selectedRate =
        rates.find((option) => option.id === value) || rates[0];
    const icon = selected?.icon;

    const [droppedToken, setDroppedToken] = useState<boolean>(!!autoFocus);
    const [droppedRate, setDroppedRate] = useState<boolean>(!!autoFocus);

    const handleMouseDown = () => {
        !disabled && setDroppedToken(!droppedToken);
        !disabled && setDroppedRate(false);
    };
    const handleMouseDownRate = () => {
        !disabled && setDroppedRate(!droppedRate);
        !disabled && setDroppedToken(false);
    };

    const handleClickOutside = () => {
        document.removeEventListener('mousedown', handleClickOutside);
        setDroppedToken(false);
        setDroppedRate(false);
    };

    const handleMouseLeave = () => {
        document.addEventListener('mousedown', handleClickOutside);
    };

    const handleMouseEnter = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

    const handleOptionSelect = (value: string | number | undefined) => {
        setDroppedToken(false);
        setDroppedRate(false);
        onChange!(value);
        onChangeToken(value);
    };
    return (
        <div className={classNames('unique-menu', className, { error })}>
            <div
                className={classNames('menu-wrapper menu-token', {
                    droppedToken,
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
                    </div>
                    <Icon name="triangle" size={8} />
                </div>
                {droppedRate && rates && (
                    <div className="menu-dropdown-rate">
                        {rates.map((optionRate) => {
                            return (
                                <div
                                    className={classNames('dropdown-option', {
                                        selectedRate:
                                            selectedRate &&
                                            optionRate.id === selectedRate.id,
                                        'with-rate': optionRate.abbreviation,
                                        disabled
                                    })}
                                    key={optionRate.id}
                                    onClick={() =>
                                        handleOptionSelect(optionRate.id)
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
                    {icon && <Icon {...icon} />}
                    <Icon name="triangle" size={8} />
                </div>
                {droppedToken && tokens && (
                    <div className="menu-dropdown">
                        {tokens.map((option) => {
                            return (
                                <div
                                    className={classNames('dropdown-option', {
                                        selected:
                                            selected &&
                                            option.id === selected.id,
                                        'with-icon': option.icon,
                                        disabled
                                    })}
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
        </div>
    );
};

export default Menu;
