/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

import { ChangeEvent, FC, KeyboardEventHandler, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { Button, Icon, InputText } from '../..';
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
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    withButton?: boolean;
    clearBtn?: boolean;
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
    clearBtn = true,
    ...rest
}: SearchProps) => {
    const onKeyDownInner: KeyboardEventHandler<HTMLInputElement> = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.code === 'Enter') {
            onSearch(value);
        }
        if (onKeyDown) {
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
            <InputText
                value={value}
                disabled={disabled}
                clearBtn={value.length > 0 && clearBtn && true}
                iconLeft={{ name: 'magnify', size: 18, color: '#7d90a1' }}
                onChange={onChange}
                onClearBtn={() => onChange('')}
                onKeyDown={onKeyDownInner}
                {...rest}
            />

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
