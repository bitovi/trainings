import Vehicle from "./Vehicle";


//mock implementation of the Vehicle class here


describe('Uses global setup', () => {
    it('uses global mock', () => {
      const instance = new Vehicle('Renegade');
      instance.getVehicle();

      expect(instance.getVehicle).toHaveBeenCalled();
      expect(instance.getVehicle()).toEqual("Wrangler")
    });
  });