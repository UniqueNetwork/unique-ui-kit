/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from "classnames";
import React, { FC } from "react";

interface TabProps {
  tabIndex: number;
  tabLabel: string;
  tabCondition: boolean;
  clickOnTab: (id: number) => void;
  tabDisabled?: boolean;
}

export const Tab: FC<TabProps> = ({
  tabIndex,
  tabLabel,
  tabCondition,
  clickOnTab,
  tabDisabled,
  ...props
}: TabProps) => (
  <div
    onClick={() => {
      if (!tabDisabled) {
        clickOnTab(tabIndex);
      }
    }}
    className={classNames("unique-tab", {
      disabled: tabDisabled,
      "condition ": tabCondition,
    })}
  >
    {tabLabel}
  </div>
);
