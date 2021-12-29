/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ChangeEvent, FC, KeyboardEventHandler, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { Button, Icon } from '../..';
import { IconProps } from '../../../types';
import './Search.scss';

interface SearchProps {
    value: string;
    id?: string;
    className?: string;
    disabled?: boolean;
    iconLeft?: IconProps;
    placeholder?: string;
    onChange: (value: string) => void;
    onSearch: (value: string) => void;
    onKeyDown?:(event: KeyboardEvent<HTMLInputElement>) => void;
    withButton?: boolean;
}

const Search: FC<SearchProps> = ({
    id,
    className,
    disabled,
    value,
    iconLeft,
    withButton,
    onChange,
    onSearch,
    onKeyDown,
    ...rest
}: SearchProps) => {
    const onKeyDownInner: KeyboardEventHandler<HTMLInputElement> = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.code === 'Enter') {
            onSearch(value);
        }
        if(onKeyDown){
            onKeyDown(event);
        }
    };

    const handleClick = () => {
        if (value) {
            onSearch(value);
        }
    };

    return (
        <div className={classNames('unique-search', className)}>
            <div
                className={classNames('input-wrapper', {
                    disabled
                })}
            >
                {iconLeft && (
                    <div className="icon-wrapper icon-left">
                        <Icon {...iconLeft} />
                    </div>
                )}
                <input
                    type="search"
                    id={id}
                    disabled={disabled}
                    value={value}
                    {...(onChange && {
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                            onChange(e.target.value)
                    })}
                    onKeyDown={onKeyDownInner}
                    {...rest}
                />
                {value && (
                    <div
                        className="icon-wrapper icon-remove"
                        onClick={() => onChange('')}
                    >
                        <Icon name="x-circle" size={20} />
                    </div>
                )}
            </div>
            {withButton && (
                <Button
                    className="button-margin"
                    disabled={disabled}
                    onClick={() => {
                        handleClick();
                    }}
                    role="primary"
                    title="Search"
                />
            )}
        </div>
    );
};

export default Search;
