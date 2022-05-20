/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import JSONPretty from 'react-json-pretty';
import { Heading } from '../../components';
import './CodeWrapper.scss';

export interface CodeWrapperProps {
    code: any;
    theme?: 'dark' | 'light';
    title?: string;
}

export const CodeWrapper = ({ code, theme, title }: CodeWrapperProps) => (
    <div className={`unique-code-wrapper ${theme}`}>
        {title && <Heading size="2">{title}</Heading>}
        <JSONPretty data={code}></JSONPretty>
    </div>
);
