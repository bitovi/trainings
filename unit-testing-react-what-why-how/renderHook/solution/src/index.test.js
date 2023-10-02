import { renderHook } from '@testing-library/react'
import { useFormattedDate } from './index.ts'

describe('useFormattedDate hook', () => {
  it('should format provided date in YYYY-MM-DD format', () => {
    const sampleDate = new Date(2023, 9, 3); // October 3, 2023
    const expectedDate = "2023-10-03";

    const { result } = renderHook(() => useFormattedDate(sampleDate));
    expect(result.current).toBe(expectedDate);
  });
});