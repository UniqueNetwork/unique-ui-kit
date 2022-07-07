/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../';

import './Upload.scss';

export interface UploadProps {
    onChange?: (data: { url: string; file: Blob } | null) => void;
    className?: string;
    disabled?: boolean;
    type?: 'circle' | 'square';
    accept?: string;
    upload?: string;
}

export const Upload = React.memo(
    ({
        onChange,
        className,
        type = 'circle',
        accept = 'image/*',
        disabled = false,
        upload,
    }: UploadProps) => {
        const inputFile = useRef<HTMLInputElement>(null);
        const [objectUrl, setObjectUrl] = useState<string | undefined>();

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
                        onChangeFile(e.target.files[0]);
                    }}
                />
            </div>
        );
    }
);
