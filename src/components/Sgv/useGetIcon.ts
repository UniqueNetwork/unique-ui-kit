import { useState, useEffect } from 'react';

export const useGetIcon = (path:string) => {
    const [icon, setIcon] = useState('');

    (function getIcon() {

        fetch(path)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                setIcon(data);
            })
    })();
console.log('icon from hook', icon);
    return icon;
}