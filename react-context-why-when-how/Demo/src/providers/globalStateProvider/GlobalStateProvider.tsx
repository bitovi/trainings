import { createContext, useState } from "react";

type State = [
  value: number,
  setValue: (newValue: any) => void
]

const initialNumber = Math.floor(Math.random() * 100);

export const GlobalStateContext = createContext<State>([
  initialNumber,
  (_value: any) => { },
]);

interface GlobalStateProviderProps {
  children: React.ReactNode;
}

export function GlobalStateProvider({
  children
}: GlobalStateProviderProps) {
  const [state, setState] = useState<number>(initialNumber)

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