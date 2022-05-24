/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import classNames from 'classnames';
import './Tabs.scss';

export interface TabsProps {
    activeIndex: number;
    children?: JSX.Element[];
    labels?: string[];
    disabledIndexes?: number[];
    type?: 'default' | 'slim';
    onClick?(activeIndex: number): void;
}

export const Tabs = ({
    activeIndex,
    labels,
    children,
    disabledIndexes,
    type = 'default',
    onClick,
}: TabsProps) => (
    <div
        className={classNames(type, {
            'unique-tabs-labels': labels,
            'unique-tabs-contents': children,
        })}
    >
        {labels
            ? labels.map((label, index) => {
                  const disabled = disabledIndexes?.includes(index);
                  return (
                      <div
                          key={`tab-label-${index}`}
                          {...(!disabled && {
                              onClick: () => {
                                  onClick?.(index);
                              },
                          })}
                          className={classNames('tab-label', {
                              active: activeIndex === index,
                              disabled,
                          })}
                      >
                          {label}
                      </div>
                  );
              })
            : children?.[activeIndex]}
    </div>
);
