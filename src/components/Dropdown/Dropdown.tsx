import React, {
    isValidElement,
    Key,
    ReactNode,
    useEffect,
    useState,
} from 'react';
import { ComponentProps, SelectOptionProps } from '../../types';
import classNames from 'classnames';
import './Dropdown.scss';
import { Icon, IconProps } from '../index';

export interface DropdownProps extends Omit<ComponentProps, 'onChange'> {
    open?: boolean;
    options?: SelectOptionProps[];
    optionKey?: string;
    optionValue?: string;
    placement?: 'left' | 'right';
    children: JSX.Element;
    iconLeft?: IconProps | ReactNode;
    iconRight?: IconProps | ReactNode;
    isTouch?: boolean;
    verticalOffset?: number | string;
    onChange?(option: SelectOptionProps): void;
    onOpenChange?(open: boolean): void;
    optionRender?(option: SelectOptionProps, isSelected: boolean): ReactNode;
    dropdownRender?(): ReactNode;
}

export const Dropdown = ({
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
    dropdownRender,
    placement = 'left',
    iconLeft,
    iconRight,
    open,
    isTouch,
    verticalOffset,
    onOpenChange,
}: DropdownProps) => {
    const selected = options?.find(
        (option) => option[optionKey as keyof SelectOptionProps] === value
    );

    const [dropped, setDropped] = useState<boolean>(!!open);

    useEffect(() => {
        setDropped(!!open);
    }, [open, setDropped]);

    const handleClickOutside = () => {
        document.removeEventListener('mousedown', handleClickOutside);
        setDropped(false);
        onOpenChange?.(false);
    };

    const handleMouseLeave = () => {
        document.addEventListener('mousedown', handleClickOutside);
    };

    const handleMouseEnter = () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };

    const handleOptionSelect = (option: SelectOptionProps) => {
        setDropped(false);
        onOpenChange?.(false);
        onChange?.(option);
    };

    const handleMouseClick = () => {
        if (disabled) return;
        setDropped(!dropped);
        onOpenChange?.(!dropped);
    };

    return (
        <div
            className={classNames('unique-dropdown', className, {
                touch: isTouch,
            })}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            id={id}
        >
            <div
                className={classNames('dropdown-wrapper', {
                    dropped,
                    disabled,
                })}
                onClick={handleMouseClick}
                data-testid="dropdown-wrapper"
            >
                {iconLeft &&
                    (isValidElement(iconLeft) ? (
                        iconRight
                    ) : (
                        <Icon {...(iconLeft as IconProps)} />
                    ))}
                {children}
                {iconRight &&
                    (isValidElement(iconRight) ? (
                        iconRight
                    ) : (
                        <Icon {...(iconRight as IconProps)} />
                    ))}
            </div>
            {dropped && (
                <div
                    className={classNames('dropdown-options', {
                        right: placement === 'right',
                        touch: isTouch,
                    })}
                    role="listbox"
                    {...(verticalOffset && { style: { top: verticalOffset } })}
                >
                    {dropdownRender?.()}
                    {options?.map((option) => {
                        const isSelected =
                            option[optionKey as keyof SelectOptionProps] ===
                            selected?.[optionKey as keyof SelectOptionProps];
                        return (
                            <div
                                className={classNames('dropdown-option', {
                                    selected: isSelected,
                                    disabled,
                                })}
                                key={
                                    (option as SelectOptionProps)[
                                        optionKey
                                    ] as Key
                                }
                                onClick={() => handleOptionSelect(option)}
                                role="option"
                            >
                                {optionRender?.(option, isSelected) ||
                                    (option[
                                        optionValue as keyof SelectOptionProps
                                    ] as string)}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
