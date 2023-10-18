import Vehicle from "./Vehicle";

jest.mock('./Vehicle', () => jest.fn().mockImplementation(() => ({
    getVehicle: jest.fn().mockImplementation(() => "Wrangler")
})));


describe('Vehicle component', () => {
    it('uses global mock', () => {
      const instance = new Vehicle('Renegade');
      instance.getVehicle();

      expect(instance.getVehicle).toHaveBeenCalled();
      expect(instance.getVehicle()).toEqual("Wrangler")
    });
  });