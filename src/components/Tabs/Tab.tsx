/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { FC } from 'react';

interface TabProps {
    index: number;
    title: string;
    active: boolean;
    onClickTab: (id: number) => void;
    disabled?: boolean;
}

export const Tab: FC<TabProps> = ({
    index,
    title,
    active,
    onClickTab,
    disabled,
    ...props
}: TabProps) => (
    <div
        onClick={() => {
            if (!disabled) {
                onClickTab(index);
            }
        }}
        className={classNames('unique-tab', {
            disabled,
            active
        })}
    >
        {title}
    </div>
);
