import { SortQuery, TableRow } from '../types';

export const sortData = (
    data: TableRow[],
    query: SortQuery,
    compareFunc?: (a: any, b: any) => number
) => {
    const sorted = [...data].sort((a, b) =>
        compareFunc
            ? compareFunc(a[query.field], b[query.field])
            : (a[query.field] as string)?.localeCompare(
                  b[query.field] as string
              )
    );
    return query.mode === 0
        ? data
        : query.mode === 1
        ? sorted.reverse()
        : sorted;
};
