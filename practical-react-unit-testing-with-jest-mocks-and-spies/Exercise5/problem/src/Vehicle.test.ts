import Vehicle from "./Vehicle";


//mock implementation of the Vehicle class here


describe('Vehicle component', () => {
    it('uses global mock', () => {
      const instance = new Vehicle('Renegade');
      instance.getVehicle();

      expect(instance.getVehicle).toHaveBeenCalled();
      expect(instance.getVehicle()).toEqual("Wrangler")
    });
  });