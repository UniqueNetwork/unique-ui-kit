import { ReactNode, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import './Accordion.scss';
import { Icon } from '../index';

export interface AccordionProps {
    title: ReactNode;
    children: ReactNode;
    expanded?: boolean;
    className?: string;
    expendIcon?: ReactNode;
}

const Accordion = ({
    title,
    children,
    expanded: defaultExpanded = false,
    className,
    expendIcon,
}: AccordionProps) => {
    const [expanded, setExpanded] = useState(defaultExpanded);

    const handleClickTitle = () => {
        setExpanded((prevState) => !prevState);
    };

    return (
        <div
            className={classNames(
                'unique-accordion',
                {
                    visible: expanded,
                },
                className
            )}
        >
            <div
                className={'unique-accordion-title'}
                onClick={handleClickTitle}
            >
                {title}
                <span className={'unique-accordion-icon'}>
                    {expendIcon || (
                        <Icon
                            size={16}
                            name={'carret-right'}
                            color={'var(--color-secondary-400)'}
                        />
                    )}
                </span>
            </div>
            <div className={'unique-accordion-content'}>{children}</div>
        </div>
    );
};

export default Accordion;
