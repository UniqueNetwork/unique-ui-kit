import { fireEvent, render } from '@testing-library/react';
import Link from '../Link/Link';
import Table from './Table';

const columns = [
    {
        title: 'Extrinsic',
        width: '20%',
        field: 'ext',
        render: (data: any) => <Link {...data.ext} />
    },
    {
        title: 'Age',
        width: '20%',
        field: 'age'
    },
    {
        title: 'From',
        width: '20%',
        field: 'from',
        render: (data: any) => <Link {...data.from} />
    },
    {
        title: 'To',
        width: '20%',
        field: 'to',
        render: (data: any) => <Link {...data.to} />
    },
    { title: 'Amount', width: '20%', field: 'amount' }
];

const data = [
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
];

it('default prop check', () => {
    const { container } = render(
        <Table
            columns={[
                columns[0],
                {
                    ...columns[1],
                    isSortable: true,
                    compareFunc: (a: any, b: any) => {
                        a = Number(a.split(' ')[0]);
                        b = Number(b.split(' ')[0]);
                        return a > b ? 1 : a < b ? -1 : 0;
                    }
                },
                {
                    ...columns[2],
                    iconRight: { name: 'clock', size: 16 }
                },
                columns[3],
                {
                    ...columns[4],
                    isSortable: true
                }
            ]}
            data={data}
        />
    );
    const btnSort = container.querySelector(
        '.table-header-sorter'
    ) as HTMLDivElement;
    fireEvent.click(btnSort);
});

it('with sort prop check', () => {
    const { container } = render(
        <Table
            columns={[
                columns[0],
                {
                    ...columns[1],
                    isSortable: true
                },
                columns[2],
                columns[3],
                {
                    ...columns[4],
                    isSortable: true
                }
            ]}
            data={data}
            onSort={jest.fn()}
        />
    );
    const btnSort = container.querySelector(
        '.table-header-sorter'
    ) as HTMLDivElement;
    fireEvent.click(btnSort);
    fireEvent.click(btnSort);
});
