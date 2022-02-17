import { render } from '@testing-library/react';
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
