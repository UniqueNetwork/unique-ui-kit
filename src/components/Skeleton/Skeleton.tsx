/**
 * @author George Maymulov <gmajmulov@usetech.com>
 */

import React from 'react';
import styled from 'styled-components';

interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    type?: 'square' | 'circle';
}

export const Skeleton = styled.div<SkeletonProps>`
    width: ${({ width }) =>
        typeof width === 'number' ? `${width}px` : width || '100%'};
    height: ${({ height }) =>
        typeof height === 'number' ? `${height}px` : height || '100%'};
    background: rgba(130, 130, 130, 0.2);
    border-radius: ${({ type }) => (type === 'circle' ? '50%' : '4px')};
    animation: wave 2s infinite ease-out;
    background: linear-gradient(
        to right,
        var(--color-blue-grey-100) 8%,
        var(--color-grey-100) 18%,
        var(--color-blue-grey-100) 33%
    );
    background-size: 800px 100px;
    align-items: center;
    @keyframes wave {
        0% {
            background-position: -400px 0;
        }
        100% {
            background-position: 400px 0;
        }
    }
`;

export default Skeleton;
