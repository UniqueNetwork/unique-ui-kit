/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import './Tabs.scss';

interface TabsProps {
    activeIndex: number;
    labels?: string[];
    contents?: JSX.Element[];
    disabledIndexes?: number[];
    onClick?(index: number): void;
}

export const Tabs: FC<TabsProps> = ({
    labels,
    contents,
    disabledIndexes,
    activeIndex,
    onClick
}: TabsProps) => (
    <div
        className={classNames({
            'unique-tabs-items': labels,
            'unique-tabs-contents': contents
        })}
    >
        {labels
            ? labels.map((label, index) => {
                  const disabled = disabledIndexes?.includes(index);
                  return (
                      <div
                          key={index}
                          {...(!disabled && {
                              onClick: () => onClick?.(index)
                          })}
                          className={classNames('tab-item', {
                              active: activeIndex === index,
                              disabled
                          })}
                      >
                          {label}
                      </div>
                  );
              })
            : contents?.[activeIndex]}
    </div>
);
