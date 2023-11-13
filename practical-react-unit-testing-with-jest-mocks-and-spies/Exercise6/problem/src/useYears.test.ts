/**
 * @jest-environment jsdom
 */

 /* 
  
 Exercise 6: 
  
 1) mock CowbirdContext from ./provider.tsx
 2) use a minimal mock implementation of CowbirdContext 
    (_currentValue is the only necessary property)
  
 The tests should pass after completing the steps above. 
  
 */ 
import { useYears } from "./useYears";
import { renderHook, waitFor } from "@testing-library/react";

const data = ["2020", "2021", "2022", "2023"];
//mock the cowbird context provider here

it("returns the years", async () => {
  const { result, rerender } = renderHook(useYears);

  rerender();
  await waitFor(() => {
    expect(result.current.years).toEqual(data);
  });
});
