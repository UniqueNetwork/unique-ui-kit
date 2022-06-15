/**
 * @author George Maymulov <gmajmulov@usetech.com>
 */

import React, { VFC } from 'react';
import './Skeleton.scss';

interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    type?: 'square' | 'circle';
}

export const Skeleton: VFC<SkeletonProps> = ({
    width = '100%',
    height = '100%',
    type = 'square',
}) => (
    <div
        className="unique-skeleton"
        style={{
            width: typeof width === 'number' ? `${width}px` : width || '100%',
            height:
                typeof height === 'number' ? `${height}px` : height || '100%',
            borderRadius: type === 'circle' ? '50%' : '4px',
        }}
    />
);
