import React, {
    createContext,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import classNames from 'classnames';
import './Notifications.scss';
import { IconProps } from '../../types';
import { Icon, Text } from '../index';

export type NotificationSeverity = 'warning' | 'error' | 'info';

export type NotificationPlacement = 'right' | 'left';

interface AlertProps {
    key?: string;
    severity: NotificationSeverity;
    content: ReactNode;
    state?: 'closed' | 'open';
    icon?: IconProps;
}

interface NotificationsContextValueType {
    push(props: AlertProps): void;
    close(index: number): void;
    clearAll(): void;
}

interface NotificationsProps {
    children: ReactNode;
    placement?: NotificationPlacement;
    closable?: boolean;
    closingDelay?: number;
}

const noop = () => {};

export const NotificationsContext =
    createContext<NotificationsContextValueType>({
        push: noop,
        close: noop,
        clearAll: noop,
    });

const Notifications = ({
    children,
    placement = 'right',
    closable = true,
    closingDelay = 5000,
}: NotificationsProps) => {
    const [alerts, setAlerts] = useState<AlertProps[]>([]);
    const alertKey = useRef(0);
    const timerId = useRef<NodeJS.Timer>();

    const clearingLoop = () => {
        timerId.current && clearInterval(timerId.current);
        timerId.current = setInterval(() => {
            setAlerts((alerts) =>
                alerts
                    .filter((alert) => alert.state !== 'closed')
                    .map((alert, index) => ({
                        ...alert,
                        state: index === 0 ? 'closed' : alert.state,
                    }))
            );
        }, closingDelay);
    };

    const push = (props: AlertProps) => {
        setAlerts((alerts) => [
            ...alerts.filter((item) => item.state !== 'closed'),
            {
                key: `notification-alert-${(alertKey.current += 1)}`,
                ...props,
            },
        ]);
        clearingLoop();
    };

    const close = (index: number) =>
        setAlerts((alerts) =>
            alerts.map((item, itemIndex) => ({
                ...item,
                state: itemIndex === index ? 'closed' : item.state,
            }))
        );

    const clearAll = () =>
        setAlerts((alerts) =>
            alerts
                .filter((item) => item.state !== 'closed')
                .map((item) => ({ ...item, state: 'closed' }))
        );

    const getDefaulticon = (severity: NotificationSeverity): IconProps =>
        severity === 'info'
            ? { name: 'success', size: 32 }
            : { name: 'warning', size: 32 };

    useEffect(() => {
        return () => timerId.current && clearInterval(timerId.current);
    }, [closingDelay]);

    return (
        <NotificationsContext.Provider
            value={{
                push,
                close,
                clearAll,
            }}
        >
            {children}
            <div className={classNames('notification-container', placement)}>
                {alerts.map(
                    ({ content, state, severity, icon, key }, index) => (
                        <div
                            key={key}
                            className={classNames('notification-alert', [
                                severity,
                                state,
                            ])}
                            onClick={() => closable && close(index)}
                        >
                            <Icon {...(icon || getDefaulticon(severity))} />
                            <Text color='var(---color-additional-light)' size='m' weight='light'>{content}</Text>
                        </div>
                    )
                )}
            </div>
        </NotificationsContext.Provider>
    );
};

export default Notifications;
