/**
 * @author Pavel Kalachev <pkalachev@usetech.com>
 */

import { VFC } from 'react';
import classNames from 'classnames';
import './Tag.scss';

interface TagProps {
    label: string;
    role?: 'default' | 'info' | 'warning' | 'danger';
}

export const Tag: VFC<TagProps> = ({ label, role = 'default' }) => (
    <span className={classNames('unique-tag', role)}>{label}</span>
);
