import { fireEvent, render } from '@testing-library/react';
import Link from '../Link/Link';
import Table from './Table';

it('default prop check', () => {
    const { container } = render(
        <Table
            columns={[
                {
                    title: 'Extrinsic',
                    width: '20%',
                    field: 'ext',
                    isSortable: true,
                    iconRight: {
                        name: 'magnify',
                        size: 18,
                        color: 'var(--color-blue-grey-300)'
                    },
                    render: (data: any) => <Link {...data} />
                },
                { title: 'Age', width: '20%', field: 'age' }
            ]}
            data={[
                {
                    ext: { title: '9666737-0' },
                    age: '11 secs ago',
                    from: { title: '14KBS...trcQH' },
                    to: { title: '14KBS...trcQH' },
                    amount: '1 QTZ'
                },
                {
                    ext: { title: '9666737-0' },
                    age: '16 secs ago',
                    from: { title: '14KBS...trcQH' },
                    to: { title: '14KBS...trcQH' },
                    amount: '1 QTZ'
                }
            ]}
        />
    );
});

it('with sort prop check', () => {
    const { container } = render(
        <Table
            columns={[
                {
                    title: 'Extrinsic',
                    width: '20%',
                    field: 'ext',
                    isSortable: true,
                    render: (data: any) => <Link {...data} />
                },
                { title: 'Age', width: '20%', field: 'age' }
            ]}
            data={[
                {
                    ext: { title: '9666737-0' },
                    age: '11 secs ago',
                    from: { title: '14KBS...trcQH' },
                    to: { title: '14KBS...trcQH' },
                    amount: '1 QTZ'
                },
                {
                    ext: { title: '9666737-0' },
                    age: '16 secs ago',
                    from: { title: '14KBS...trcQH' },
                    to: { title: '14KBS...trcQH' },
                    amount: '1 QTZ'
                }
            ]}
            onSort={jest.fn()}
        />
    );
    const btnSort = container.querySelector('.table-header-sorter');
    fireEvent.click(btnSort!);
    fireEvent.click(btnSort!);
});
