/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import './CodeWrapper.scss';

interface CodeWrapperProps {
    code: string;
    theme?: 'dark' | 'light';
    title?: string;
}

export const CodeWrapper: FC<CodeWrapperProps> = ({
    code,
    theme,
    title
}: CodeWrapperProps) => (
    <div className={`unique-code-wrapper ${theme}`}>
        {title && <h2>{title}</h2>}
        <pre>{JSON.stringify(JSON.parse(code), null, 2)}</pre>
    </div>
);
