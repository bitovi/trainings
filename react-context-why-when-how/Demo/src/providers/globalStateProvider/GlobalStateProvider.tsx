import { createContext, useState } from "react";

type State = [
  value: number | null,
  setValue: (newValue: any) => void
]

export const GlobalStateContext = createContext<State>([
  null,
  (_value: any) => { },
]);

interface GlobalStateProviderProps {
  children: React.ReactNode;
}

export function GlobalStateProvider({
  children
}: GlobalStateProviderProps) {
  const [state, setState] = useState<number>()

  return (
    <GlobalStateContext.Provider value={[
      state,
      (value: any) => {
        setState(value)
      }
    ]}>
      {children}
    </GlobalStateContext.Provider>
  );
}