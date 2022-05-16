import { NotificationsContext } from '../Notifications';
import { ReactNode, useContext } from 'react';
import { IconProps } from '../../../types';

export const useNotifications = () => {
    const { push, clearAll } = useContext(NotificationsContext);

    return {
        info: (content: ReactNode, icon?: IconProps) =>
            push({ content, severity: 'info', icon }),
        warning: (content: ReactNode, icon?: IconProps) =>
            push({ content, severity: 'warning', icon }),
        error: (content: ReactNode, icon?: IconProps) =>
            push({ content, severity: 'error', icon }),
        clearAll,
    };
};
