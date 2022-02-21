import { useEffect, useRef } from 'react';
import { SortQuery, TableRow } from '../types';

/** Functional methods */

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

/** Hooks */

export const usePrevious = <T>(value: T): T => {
    const ref: any = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
};
