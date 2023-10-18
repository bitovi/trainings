export default class Vehicle {
    vehicle: string;
   
    constructor(type: string) {
      this.vehicle = type;
    }
   
    getVehicle() {
      return this.vehicle;
    }
  }
  
