import { useContext } from "react";
import { ComplexStateContext } from "./ComplexStateProvider";

export const useComplexState = () => {
  const context = useContext(ComplexStateContext);

  if (context === undefined) {
    throw new Error(
      "Complex state context cannot be accessed outside of the GlobalStateProvider."
    );
  }

  return context;
};
