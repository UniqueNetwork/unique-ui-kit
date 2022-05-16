import { fireEvent, render, act } from '@testing-library/react';
import Notifications from './Notifications';
import { useNotifications } from './hook/useNotifications';
import { Button } from '../index';
import { sleep } from '../../utils';

const NotificationsExample = () => {
    const { info } = useNotifications();

    return (
        <>
            <Button onClick={() => info('Info alert')} title={'Push info'} />
        </>
    );
};

describe('Notifications component', () => {
    it('should be render info alert', () => {
        const { getByText } = render(
            <Notifications>
                <NotificationsExample />
            </Notifications>
        );
        act(() => {
            fireEvent.click(getByText('Push info')!);
        });
        expect(getByText('Info alert')).toBeInTheDocument();
    });

    it('should be close by timer', async () => {
        const { getByText } = render(
            <Notifications closingDelay={200}>
                <NotificationsExample />
            </Notifications>
        );
        act(() => {
            fireEvent.click(getByText('Push info')!);
        });
        const alert = getByText('Info alert')!;

        await act(async () => {
            await sleep(600);
        });
        expect(alert).not.toBeInTheDocument();
    });

    it('should be close by click', () => {
        const { getByText } = render(
            <Notifications>
                <NotificationsExample />
            </Notifications>
        );

        act(() => {
            fireEvent.click(getByText('Push info')!);
        });
        const alert = getByText('Info alert')!;
        fireEvent.click(alert);
        expect(alert).toHaveClass('closed');
    });

    it('should be close by click if closing disabled', () => {
        const { getByText } = render(
            <Notifications closable={false}>
                <NotificationsExample />
            </Notifications>
        );

        act(() => {
            fireEvent.click(getByText('Push info')!);
        });
        const alert = getByText('Info alert')!;
        fireEvent.click(alert);
        expect(alert).not.toHaveClass('closed');
    });
});
