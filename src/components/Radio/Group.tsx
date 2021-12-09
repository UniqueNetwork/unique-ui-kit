/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC } from 'react';
import { Radio } from '..';
import './Radio.scss';

interface GroupProps {
    options: { value: string | number; disabled?: boolean }[];
    value: string | number;
    size?: 's' | 'm';
    onChange: (value: number | string) => void;
}

export const Group: FC<GroupProps> = ({ options, value, size, onChange }) => (
    <div className="unique-radio-group-wrapper">
        {options.map((radio, index) => {
            return (
                <Radio
                    {...radio}
                    key={index}
                    size={size || 'm'}
                    checked={value === radio.value}
                    onChange={onChange}
                />
            );
        })}
    </div>
);
