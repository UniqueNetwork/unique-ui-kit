import { renderHook } from '@testing-library/react-hooks';
import { useIsFirstRender } from './useIsFirstRender';

describe('useIsFirstRender', () => {
    it('should be first render', () => {
        const { result } = renderHook(() => useIsFirstRender());

        expect(result.current).toBeTruthy();
    });

    it('should be not first render', () => {
        const { result, rerender } = renderHook(() => useIsFirstRender());

        rerender();
        expect(result.current).toBeFalsy();

        rerender();
        expect(result.current).toBeFalsy();
    });
});
