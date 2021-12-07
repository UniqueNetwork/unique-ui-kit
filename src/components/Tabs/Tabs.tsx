/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Tab } from './Tab';
import './Tabs.scss';

interface TabsProps {
    titles: string[];
    contents: ReactElement[];
    activeIndex?: number;
    disabledIndex?: number[];
    changeContentIndex: (id: number) => void;
}

export const Tabs: FC<TabsProps> = ({
    titles,
    contents,
    activeIndex,
    disabledIndex,
    changeContentIndex
}: TabsProps) => {
    const [activeTab, setActiveTab] = useState(activeIndex || 0);

    const onClickTab = (id: number) => {
        setActiveTab(id);
        changeContentIndex(id);
    };

    return (
        <div className="unique-tabs-wrapper">
            {titles.map((tab, index) => {
                return (
                    <Tab
                        key={index}
                        index={index}
                        title={tab}
                        onClickTab={onClickTab}
                        active={activeTab == index}
                        disabled={
                            disabledIndex && disabledIndex.includes(index)
                        }
                    />
                );
            })}
        </div>
    );
};
