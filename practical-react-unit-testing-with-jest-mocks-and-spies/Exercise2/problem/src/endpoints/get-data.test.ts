/**
 * @jest-environment jsdom
 */

 /* 
  
 Exercise 2: 
  
 1) Create a mock of window.fetch using Object.defineProperty()
 2) Use .mockResolvedValue() to have the mock fetch resolve to 
      a skeleton mock response containing .json()
 3) Return the value of resolvedData in the mock .json()
  
 The tests should pass after completing the steps above. 
  
 */ 
import { getData } from "./get-data";

const resolvedData = ["2020", "2021", "2022"];

//mock the global.fetch using Object.defineProperty to return the resolvedData

it("finds years", async () => {
  const years = await getData("years");

  expect(years).toEqual(resolvedData);
  expect(fetch).toHaveBeenCalledTimes(1);
});
