import { useState, useEffect } from 'react';

export const useGetAvatar = (path: string) => {
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        fetch(path)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                setAvatar(data);
            });
    }, [path]);

    return avatar;
};
