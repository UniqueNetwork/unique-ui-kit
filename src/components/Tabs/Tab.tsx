import classNames from "classnames";
import React, { FC } from "react";

interface TabProps {
  condition?: boolean;
  disabled?: boolean;
  index: number;
  click: (id: number) => void;
  label: string;
}

export const Tab: FC<TabProps> = ({
  label,
  disabled,
  index,
  click,
  condition,
  ...props
}: TabProps) => (
  <div
    onClick={() => {
      if (!disabled) {
        click(index);
      }
    }}
    className={classNames("unique-tab", {
      disabled,
      condition,
    })}
  >
    {label}
  </div>
);
