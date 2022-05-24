/**
 * @author Vaagn Mazmanyan <vmazmanyan@usetech.com>
 */

import { Icon, Heading } from '../../components';
import './IconSet.scss';

export interface IconSetProps {
    icons: {
        name: string;
        size?: number;
    }[];
}

export const IconSet = ({ icons }: IconSetProps) => (
    <>
        <Heading size="2">Base icons</Heading>
        <div className={`unique-icon-set`}>
            {icons &&
                icons.map((icon) => (
                    <div key={icon.name} className={`icon-item`}>
                        <Icon name={icon.name} size={icon.size || 20} />
                        <div>{icon.name}</div>
                    </div>
                ))}
        </div>
    </>
);
