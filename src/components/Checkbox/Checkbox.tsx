/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Checkbox.scss';
import { Icon } from '..';
import { IconProps } from '../../types';

interface CheckboxProps {
    checked: boolean;
    label: string;
    size?: 's' | 'm';
    disabled?: boolean;
    onChange: (value: boolean) => void;
    iconRight?: IconProps;
    iconLeft?: IconProps;
}

const Checkbox: FC<CheckboxProps> = ({
    checked,
    label,
    disabled,
    size = 's',
    onChange,
    iconRight,
    iconLeft,
}: CheckboxProps) => {
    const icon = iconLeft || iconRight;
    return (
        <div
            className={classNames(
                'unique-checkbox-wrapper',
                `checkbox-size-${size}`,
                { disabled }
            )}
            {...(!disabled && {
                onClick: () => onChange(!checked),
            })}
        >
            <input
                type="checkbox"
                name={label}
                id={label}
                className="checkbox"
                checked={checked}
                onChange={(e) => e.preventDefault()}
            />
            <span className={classNames('checkmark', { checked })}>
                {checked && (
                    <Icon
                        name="checked"
                        color="#fff"
                        size={size === 's' ? 16 : 18}
                    />
                )}
            </span>

            <label
                className={classNames('checkbox-label', {
                    'icon-left': iconLeft,
                    'icon-right': iconRight,
                })}
            >
                {icon && <Icon {...icon} />}
                <span>{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
