import { useContext } from "react";
import { GlobalStateContext } from "./GlobalStateProvider";

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error(
      "Global state context cannot be accessed outside of the GlobalStateProvider."
    );
  }

  return context;
};
