import { useState, useEffect } from "react";
import Vehicle from "./Vehicle";

export function useVehicle(year, make, model) {
  const [vehicle, setVehicle] = useState<Vehicle>();

  useEffect(() => {
    setVehicle(undefined);
  }, [year, make]);

  useEffect(() => {
    if (model) {
      setVehicle(new Vehicle(model));
    }
  }, [model]);

  return vehicle;
}