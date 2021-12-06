/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import React, { FC, ReactElement, useEffect, useState } from "react";
import { Tab } from "./Tab";
import "./Tabs.scss";

interface TabsProps {
  tabsNames: string[];
  tabsContent: ReactElement[];
  tabConditionIndex?: number;
  tabsDisabledIndex: number[];
  setContentIndex: (id: number) => void;
}

export const Tabs: FC<TabsProps> = ({
  tabsNames,
  tabsContent,
  tabConditionIndex,
  tabsDisabledIndex,
  setContentIndex,
  ...props
}: TabsProps) => {
  const [conditionTab, setCondutionTab] = useState(tabConditionIndex);

  useEffect(() => {
    if (tabConditionIndex) {
      setCondutionTab(tabConditionIndex);
      setContentIndex(tabConditionIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabConditionIndex]);

  const clickOnTab = (id: number) => {
    setCondutionTab(id);
    setContentIndex(id);
  };
  return (
    <div className="unique-tabs-container">
      {tabsNames.map((tab, index) => {
        return (
          <Tab
            key={index}
            tabIndex={index}
            tabLabel={tab}
            clickOnTab={clickOnTab}
            tabCondition={conditionTab == index}
            tabDisabled={tabsDisabledIndex && tabsDisabledIndex.includes(index)}
          />
        );
      })}
    </div>
  );
};
