import { getData } from "./get-data";

const resolvedData = ["2020", "2021", "2022"];
Object.defineProperty(global, "fetch", {
  writable: true,
  value: jest.fn().mockResolvedValue({
    json: () => resolvedData
  })
});

it("finds years", async () => {
  const years = await getData("years");

  expect(years).toEqual(resolvedData);
  expect(fetch).toHaveBeenCalledTimes(1);
});
