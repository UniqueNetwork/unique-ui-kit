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
    abbreviation: string;
    rate: string;
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
    const selected = tokens.find((option) => option.id === value) || tokens[0];
    const icon = selected?.icon;

    const [droppedToken, setDroppedToken] = useState<boolean>(!!autoFocus);
    const [droppedRate, setDroppedRate] = useState<boolean>(!!autoFocus);

    const handleMouseDown = () => {
        !disabled && setDroppedToken(!droppedToken);
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
    };
    return (
        <div className={classNames('unique-menu', className, { error })}>
            <div
                className={classNames('menu-wrapper menu-token', {
                    droppedToken,
                    disabled
                })}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onFocus={onFocus}
                onBlur={onBlur}
                tabIndex={tabIndex}
                id={id}
            >
                <div className="selected selected-rate">
                    <div className="selected-rate-wrapper">
                        <div>
                            {rates[0].rate} <span>{rates[0].abbreviation}</span>
                        </div>
                        <div>
                            {rates[1].rate} <span>{rates[1].abbreviation}</span>
                        </div>
                    </div>
                    <Icon name="triangle" size={8} />
                </div>
                <span className="seporate" />
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
