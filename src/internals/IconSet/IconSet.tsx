/**
 * @author Vaagn Mazmanyan <vmazmanyan@usetech.com>
 */

import React, { FC } from 'react';
import { Icon, Heading } from '../../components';
import './IconSet.scss';

interface IconSetProps {
    icons: string[];
}

const IconSet: FC<IconSetProps> = ({ icons }: IconSetProps) => (
    <>
        <Heading size="2">Base icons</Heading>
        <div className={`unique-icon-set`}>
            {icons &&
                icons.map((icon) => (
                    <div key={icon} className={`icon-item`}>
                        <Icon name={icon} size={20} />
                        <div>{icon}</div>
                    </div>
                ))}
        </div>
    </>
);

export default IconSet;
