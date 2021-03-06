/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { Icon } from '../';

import './Upload.scss';

interface UploadProps {
    onChange?: (url: string, file: Blob) => void;
    className?: string;
    disabled?: boolean;
    type?: 'circle' | 'square';
    accept?: string;
    upload?: string;
}

const Upload: FC<UploadProps> = ({
    onChange,
    className,
    type = 'circle',
    accept = 'image/*',
    disabled = false,
    upload,
}: UploadProps) => {
    const inputFile = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] =
        useState<Blob | undefined>(undefined);

    useEffect(() => {
        if (!upload) {
            return;
        }
        const getBlob = async () => {
            const blob = await fetch(upload).then((response) =>
                response.blob()
            );
            setSelectedFile(blob);
        };

        getBlob();
    }, [upload]);

    useEffect(() => {
        if (!selectedFile) {
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        onChange?.(objectUrl, selectedFile);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    return (
        <div className={classNames('unique-upload', className)}>
            {selectedFile ? (
                <div className={classNames('preview', type)}>
                    <img
                        className="image"
                        src={URL.createObjectURL(selectedFile)}
                    />
                    <span
                        onClick={() => {
                            setSelectedFile(undefined);
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
                        setSelectedFile(undefined);
                        return;
                    }
                    setSelectedFile(e.target.files[0]);
                }}
            />
        </div>
    );
};

export default Upload;
