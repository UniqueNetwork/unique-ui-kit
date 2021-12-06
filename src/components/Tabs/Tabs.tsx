import React, { FC, ReactElement, useEffect, useState } from "react";
import { Tab } from "./Tab";
import "./Tabs.scss";

interface TabsProps {
  tabsNames: string[];
  tabsContent: ReactElement[];
  setContentIndex: (id: number) => void;
  condtitionTabIndex: number;
  disabledTabsIndex: number[];
}

export const Tabs: FC<TabsProps> = ({
  tabsNames,
  tabsContent,
  setContentIndex,
  condtitionTabIndex,
  disabledTabsIndex,
  ...props
}: TabsProps) => {
  const [conditionTab, setCondutionTab] = useState(0);

  useEffect(() => {
    setCondutionTab(condtitionTabIndex);
    setContentIndex(condtitionTabIndex);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condtitionTabIndex]);

  const clickOnTab = (id: number) => {
    setCondutionTab(id);
    setContentIndex(id);
  };
  return (
    <div className="unique-tabs-container">
      {tabsNames.map((tab, index) => {
        return (
          <Tab
            label={tab}
            key={index}
            index={index}
            click={clickOnTab}
            condition={conditionTab === index}
            disabled={disabledTabsIndex && disabledTabsIndex.includes(index)}
          />
        );
      })}
    </div>
  );
};
