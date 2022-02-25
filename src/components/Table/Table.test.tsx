import { fireEvent, render } from '@testing-library/react';
import Link from '../Link/Link';
import Table from './Table';

it('default prop check', () => {
    render(
        <Table
            columns={[
                {
                    title: 'Extrinsic',
                    width: '20%',
                    field: 'ext',
                    iconLeft: {
                        name: 'burn',
                        size: 15,
                        color: '#FF6335'
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

it('sortable prop check', () => {
    const { container } = render(
        <Table
            columns={[
                {
                    title: 'Extrinsic',
                    width: '20%',
                    field: 'ext',
                    compareFunc: jest.fn(),
                    isSortable: true,
                    render: (data: any) => <Link {...data} />
                },
                {
                    title: 'Age',
                    width: '20%',
                    field: 'age',
                    compareFunc: jest.fn(),
                    isSortable: true
                },
                {
                    title: 'From',
                    width: '20%',
                    field: 'from',
                    compareFunc: jest.fn(),
                    isSortable: true,
                    render: (data: any) => <Link {...data} />
                },
                {
                    title: 'To',
                    width: '20%',
                    field: 'to',
                    compareFunc: jest.fn(),
                    isSortable: false,
                    render: (data: any) => <Link {...data} />
                },
                { title: 'Amount', width: '20%', field: 'amount' }
            ]}
            data={[
                {
                    ext: { title: '9666737-0' },
                    age: '11 secs',
                    from: { title: '14KBS...trcQH' },
                    to: { title: 'YqEew...11IJK' },
                    amount: '2 QTZ'
                },
                {
                    ext: { title: '9666828-1' },
                    age: '16 secs',
                    from: { title: '23AFx...oPPwR' },
                    to: { title: '77NNm...lLk2L' },
                    amount: '1 QTZ'
                },
                {
                    ext: { title: '9666919-2' },
                    age: '5 secs',
                    from: { title: 'D3ws3...xpSm8' },
                    to: { title: '21adF...99Ikkl' },
                    amount: '3 QTZ'
                }
            ]}
            onSort={jest.fn()}
        />
    );
    fireEvent.click(container.querySelector('.table-header-sorter')!);
    fireEvent.click(container.querySelector('.table-header-sorter')!);
});
