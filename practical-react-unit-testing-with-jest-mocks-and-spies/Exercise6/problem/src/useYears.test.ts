/**
 * @jest-environment jsdom
 */
import { useYears } from "./useYears";
import { renderHook, waitFor } from '@testing-library/react';

const data = ["2020", "2021", "2022", "2023"];
//mock the cowbird context provider here

it("returns the years", async () => {

  const { result, rerender } = renderHook(useYears);
  
  rerender();
  await waitFor(() => {
    expect(result.current.years).toEqual(data);
  });
});
