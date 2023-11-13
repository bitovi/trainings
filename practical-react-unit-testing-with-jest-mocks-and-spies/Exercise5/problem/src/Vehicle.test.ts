import Vehicle from "./Vehicle";

jest.mock('./Vehicle');

describe('Vehicle component', () => {
    it('uses global mock', () => {
      const instance = new Vehicle('Renegade');
      // Provide a mock implementation of instance.getVehicle()

      // use requireActual to get the "real" toString() function from the module.
      const toString = jest.fn();

      expect(toString.call(instance)).toEqual("[Vehicle Wrangler]")
      expect(instance.getVehicle).toHaveBeenCalled();
    });
  });
