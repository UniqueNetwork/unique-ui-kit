import { getDeepValue } from '.';

describe('getDeepValue function', () => {
    it('should return correct values in object', () => {
        expect(getDeepValue({ test: '1' }, 'test')).toBe('1');

        expect(
            getDeepValue(
                { test: { test2: { test3: { test4: '2' } } } },
                'test.test2.test3.test4'
            )
        ).toBe('2');

        expect(
            getDeepValue(
                { test: { test2: { test3: { test4: '2' } } } },
                'test.test2.test3'
            )
        ).toEqual({ test4: '2' });

        expect(
            getDeepValue({ test: { test2: { test3: { test4: '2' } } } }, 'test')
        ).toEqual({ test2: { test3: { test4: '2' } } });

        expect(
            getDeepValue({ test: { test2: { test3: { test4: '2' } } } }, 'test')
        ).toEqual({ test2: { test3: { test4: '2' } } });
    });

    it('should return correct values in array', () => {
        expect(
            getDeepValue({ a: [{}, {}, { b: { c: [1, 2, 3] } }] }, 'a[2].b')
        ).toEqual({ c: [1, 2, 3] });

        expect(
            getDeepValue({ a: [{}, {}, { b: { c: [1, 2, 3] } }] }, 'a[2]')
        ).toEqual({ b: { c: [1, 2, 3] } });

        expect(
            getDeepValue({ a: [1, {}, { b: { c: [1, 2, 3] } }] }, 'a[0]')
        ).toBe(1);
    });

    it('should return undefined when values not found', () => {
        expect(getDeepValue({ a: '1' }, 'a.b.c')).toBeUndefined();
        expect(getDeepValue({ a: null }, 'a.b.c')).toBeUndefined();
        expect(getDeepValue({ a: [] }, 'a.b.c[0].d')).toBeUndefined();
        expect(getDeepValue({ a: [1] }, 'a.b.c')).toBeUndefined();
        expect(getDeepValue({ a: [1] }, 'a[0].b.c')).toBeUndefined();
        expect(getDeepValue({}, 'a.b.c')).toBeUndefined();
    });
});
