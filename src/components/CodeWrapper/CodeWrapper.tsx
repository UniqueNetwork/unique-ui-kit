/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import JSONPretty from 'react-json-pretty';
import './CodeWrapper.scss';

interface CodeWrapperProps {
    code: any;
    theme?: 'dark' | 'light';
    title?: string;
}

const CodeWrapper: FC<CodeWrapperProps> = ({
    code,
    theme,
    title
}: CodeWrapperProps) => (
    <div className={`unique-code-wrapper ${theme}`}>
        {title && <h2>{title}</h2>}
        <JSONPretty data={code}></JSONPretty>
    </div>
);

export default CodeWrapper;
