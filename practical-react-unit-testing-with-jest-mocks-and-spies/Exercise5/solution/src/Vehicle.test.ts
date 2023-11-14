import Vehicle from "./Vehicle";

jest.mock("./Vehicle");

describe("Vehicle component", () => {
  it("uses global mock", () => {
    const instance = new Vehicle("Renegade");
    instance.getVehicle.mockImplementation(() => "Wrangler");
    const toString = jest.requireActual("./Vehicle").toString;

    expect(toString.call(instance)).toEqual("[Vehicle Wrangler]");
    expect(instance.getVehicle).toHaveBeenCalled();
  });
});
