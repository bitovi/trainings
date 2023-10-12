import { createContext, useMemo } from "react";
import { useGlobalState } from "../globalStateProvider/useGlobalState";

const initialState = {
  randomNumber: 0,
  neverChange: true
};

export const ComplexStateContext = createContext({
  ...initialState
});

interface ComplexStateProviderProps {
  children: React.ReactNode;
}

export function ComplexStateProvider({ children }: ComplexStateProviderProps) {
  const [state] = useGlobalState();

  const ctx = useMemo(() => {
    return {
      randomNumber: state,
      neverChange: true
    };
  }, [state]);

  return (
    <ComplexStateContext.Provider value={ctx}>
      {children}
    </ComplexStateContext.Provider>
  );
}
