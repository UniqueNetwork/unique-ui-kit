import React, { FC, useState } from 'react';
import { Select } from './components';

const App: FC = () => {
    const [value, setValue] = useState(undefined);
    const args = {
        label: 'Label',
        additionalText: 'Additional text',
        placeholder: 'Placeholder',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
    };
    return (
        <Select
            {...args}
            value={value}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onChange={(value: any) => {
                console.log('onChange', value);
                setValue(value);
            }}
        />
    );
};

export default App;
