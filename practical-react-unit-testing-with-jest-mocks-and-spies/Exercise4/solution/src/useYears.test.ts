/**
 * @jest-environment jsdom
 */
import { useYears } from "./useYears";
import { renderHook, waitFor } from '@testing-library/react';
import { useCowbird } from "./provider";

const data = ["2020", "2021", "2022", "2023"];
Object.defineProperty(window, "fetch", {
  writable: true,
  value: jest.fn(() =>
    Promise.resolve({
      ...data,
    })
  ),
});

jest.mock('./provider', () => ({
    useCowbird: jest.fn().mockImplementation(() => ({cbFetch: () => ({ json: () => ({data}) })}))
  }));

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

  //add another test for mockImplementationOnce