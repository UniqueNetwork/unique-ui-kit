import React, {FC, Key, ReactNode, useEffect, useState} from "react";
import {ComponentProps, SelectOptionProps} from "../../types";
import classNames from "classnames";
import './Dropdown.scss';

interface DropdownProps extends ComponentProps {
    options: SelectOptionProps[];
    optionKey?: string;
    optionValue?: string;
    placement?: 'left' | 'right';
    children: JSX.Element;
    onChange(option: SelectOptionProps): void;
    optionRender?(option: SelectOptionProps, isSelected: boolean): ReactNode
}

const Dropdown = ({
        id,
        value,
        className,
        disabled,
        options,
        optionKey = 'id',
        optionValue = 'title',
        onChange,
        children,
        optionRender,
        placement = 'left',
    }: DropdownProps) => {

    const selected = options.find(
        (option) => option[optionKey as keyof SelectOptionProps] === value
    );

    const [dropped, setDropped] = useState<boolean>(false);

    const handleClickOutside = () => {
        document.removeEventListener('mousedown', handleClickOutside);
        setDropped(false);
    };

    const handleMouseLeave = () => {
        document.addEventListener('mousedown', handleClickOutside);
    };

    const handleMouseEnter = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

    const handleOptionSelect = (option: SelectOptionProps) => {
        setDropped(false);
        onChange?.(option);
    };

    const handleMouseDown = () => {
        !disabled && setDropped(!dropped);
    };

    return (
        <div
            className={classNames('unique-dropdown', className)}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            id={id}
        >
            <div
                className={classNames('dropdown-wrapper', {
                    dropped,
                    disabled
                })}
                onMouseDown={handleMouseDown}
                data-testid={`dropdown-wrapper`}
            >
                {children}
            </div>
            {dropped && options && (
                <div
                    className={classNames('dropdown-options', {
                        right: placement === 'right'
                    })}
                    role="listbox"
                >
                    {options.map((option) => {
                        const isSelected = option[
                                optionKey as keyof SelectOptionProps
                            ] ===
                            selected?.[
                                optionKey as keyof SelectOptionProps
                            ];
                        return (
                            <div
                                className={classNames('dropdown-option', {
                                    selected: isSelected,
                                    disabled
                                })}
                                key={
                                    (option as SelectOptionProps)[
                                        optionKey
                                        ] as Key
                                }
                                onClick={() => handleOptionSelect(option)}
                                role="option"
                            >
                                {
                                    (optionRender?.(
                                        option,
                                        isSelected
                                    )) ||
                                    option[
                                        optionValue as keyof SelectOptionProps
                                    ] as string
                                }
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )

};

export default Dropdown;