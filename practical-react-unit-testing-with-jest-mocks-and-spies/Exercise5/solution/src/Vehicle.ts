export function toString(this: Vehicle): string {
  return `[Vehicle ${this.getVehicle()}]`;
}

export default class Vehicle {
    vehicle: string;
   
    constructor(type: string) {
      this.vehicle = type;
    }
   
    getVehicle() {
      return this.vehicle;
    }

  }
Vehicle.prototype.toString = toString;
  
