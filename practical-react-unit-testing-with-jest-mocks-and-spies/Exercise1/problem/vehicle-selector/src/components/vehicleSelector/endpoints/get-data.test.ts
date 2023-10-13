import { getData } from "./get-data";


const resolvedData = ["2020", "2021", "2022"]

//mock the global.fetch using Object.defineProperty to return the resolvedData


it("finds years", async () => {
    const years = await getData("years");
  
    expect(years).toEqual(resolvedData);
    expect(fetch).toHaveBeenCalledTimes(1);
  });