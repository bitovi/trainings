import { useContext } from "react";
import { AnimalsContext } from "./AnimalsProvider";

export const useAnimals = () => {
  const context = useContext(AnimalsContext);

  if (context === undefined) {
    throw new Error(
      "Animals context cannot be accessed outside of the AnimalsProvider."
    );
  }

  return context;
};
