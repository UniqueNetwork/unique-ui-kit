/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../';

import './Upload.scss';
import { ComponentProps } from '../../types';

export interface IUploadBaseProps {
    onChange?: (data: { url: string; file: Blob } | null) => void;
    type?: 'circle' | 'square';
    accept?: string;
    upload?: string;
    beforeUpload?: (data: { url: string; file: Blob }) => boolean;
}

export type UploadProps = IUploadBaseProps &
    Pick<ComponentProps, 'className' | 'disabled' | 'testid'>;

export const Upload = React.memo(
    ({
        onChange,
        className,
        type = 'circle',
        accept = 'image/*',
        disabled = false,
        upload,
        testid,
        beforeUpload,
    }: UploadProps) => {
        const inputFile = useRef<HTMLInputElement>(null);
        const [objectUrl, setObjectUrl] = useState<string | undefined>();

        const onValidate = (file: Blob | undefined) => {
            if (!file) return true;
            const url = URL.createObjectURL(file);
            return beforeUpload ? beforeUpload({ url, file }) : true;
        };

        const onChangeFile = (file: Blob | undefined) => {
            if (!inputFile.current) return;
            if (!file) {
                setObjectUrl(undefined);
                onChange?.(null);
                inputFile.current.value = '';
                return;
            }
            const url = URL.createObjectURL(file);
            setObjectUrl(url);
            onChange?.({ url, file });
        };

        useEffect(() => {
            setObjectUrl(upload);
        }, [upload]);

        useEffect(
            () => () => {
                objectUrl && URL.revokeObjectURL(objectUrl);
            },
            [objectUrl]
        );

        return (
            <div className={classNames('unique-upload', className)}>
                {objectUrl ? (
                    <div className={classNames('preview', type)}>
                        <div
                            className="image"
                            style={{
                                backgroundImage: `url(${objectUrl})`,
                            }}
                        />
                        <span
                            onClick={() => {
                                onChangeFile(undefined);
                            }}
                        >
                            <Icon name="close-circle" size={13} />
                        </span>
                    </div>
                ) : (
                    <div
                        className={classNames('upload', type, { disabled })}
                        onClick={() => {
                            inputFile.current?.click();
                        }}
                        onDragOver={(event) => {
                            event.stopPropagation();
                            event.preventDefault();
                        }}
                        onDrop={(event) => {
                            onChangeFile(event.dataTransfer.files[0]);
                            event.stopPropagation();
                            event.preventDefault();
                        }}
                    >
                        <Icon name="file-arrow-up" size={38} />
                    </div>
                )}
                <input
                    ref={inputFile}
                    type="file"
                    disabled={disabled}
                    accept={accept}
                    onChange={(e) => {
                        if (!e.target.files || e.target.files.length === 0) {
                            onChangeFile(undefined);
                            return;
                        }
                        const file = e.target.files[0];
                        if (onValidate(file)) {
                            onChangeFile(e.target.files[0]);
                        } else {
                            if (!inputFile.current) return;
                            inputFile.current.value = '';
                        }
                    }}
                    data-testid={testid}
                />
            </div>
        );
    }
);
