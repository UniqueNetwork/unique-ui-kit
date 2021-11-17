import React, { FC } from 'react';
import { InputText } from '../components';
import '../assets/style/book.scss';

export const InputTextStoryBook: FC = () => {
    return (
        <div className="book-item">
            <InputText
                label="Label"
                additionalText="Additional text"
                placeholder="Placeholder"
                onFocus={() => console.log('onFocus')}
                onChange={(value) => console.log('onChange', value)}
                onBlur={() => console.log('onBlur')}
            />
            <InputText
                label="Label"
                additionalText="Additional text"
                placeholder="Placeholder"
                defaultValue="Value"
            />
            <InputText
                label="Label"
                additionalText="Additional text"
                placeholder="Placeholder"
                disabled
            />
            <InputText
                label="Label"
                additionalText="Additional text"
                placeholder="Placeholder"
                defaultValue="Value"
                disabled
            />
            <InputText
                label="Label"
                placeholder="Placeholder"
                defaultValue="Value"
                statusText="Status text"
            />
            <InputText
                label="Label"
                placeholder="Placeholder"
                defaultValue="Value"
                statusText="Error message"
                error
            />

            <InputText label="Label" placeholder="Placeholder" />
            <InputText
                label="Label"
                placeholder="Placeholder"
                defaultValue="Value"
            />
            <InputText
                className="with-icon icon-eye"
                placeholder="Placeholder"
            />
            <InputText
                className="with-icon icon-edit"
                placeholder="Placeholder"
                defaultValue="Value"
            />
            <InputText
                className="with-icon icon-edit"
                placeholder="Placeholder"
                defaultValue="Value"
                statusText="Status message"
            />
            <InputText
                className="with-icon icon-edit"
                placeholder="Placeholder"
                defaultValue="Value"
                statusText="Error message"
                error
            />
            <InputText placeholder="Placeholder" />
            <InputText placeholder="Placeholder" defaultValue="Value" />
            <InputText placeholder="Placeholder" disabled />
            <InputText
                placeholder="Placeholder"
                defaultValue="Value"
                disabled
            />
        </div>
    );
};
