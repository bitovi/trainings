/**
 * @jest-environment jsdom
 */
import { useYears } from "./useYears";
import { renderHook, waitFor } from '@testing-library/react';
import { useCowbird } from "./provider";

const data = ["2020", "2021", "2022", "2023"];
//mock window.fetch using Object.defineProperty

//mock the cowbird provider here

it("returns the years", async () => {

  const { result, rerender } = renderHook(() => useYears())
  
  await waitFor(() => {
      expect(useCowbird).toHaveBeenCalled();
  });

  rerender();
  await waitFor(() => {
    expect(result.current.years).toEqual(data);
  });
});
