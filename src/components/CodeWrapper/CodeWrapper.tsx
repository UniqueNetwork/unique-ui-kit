/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import React, { FC } from 'react';
import JSONPretty from 'react-json-pretty';
import { Heading } from '..';
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
        {title && <Heading size="2">{title}</Heading>}
        <JSONPretty data={code}></JSONPretty>
    </div>
);

export default CodeWrapper;
