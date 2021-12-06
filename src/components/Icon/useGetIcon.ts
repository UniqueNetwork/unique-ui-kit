import { useState, useEffect } from 'react';

let cacheStore = new Map();

export const useGetIcon = (path: string) => {
    const [icon, setIcon] = useState('');

useEffect(() => {
    if (cacheStore.get(path)) {
        setIcon(cacheStore.get(path));
       
    } else {
        fetch(path)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                cacheStore.set(path, data)
                setIcon(data);
            })
    }
  }, [path]);

    return icon;
}