import { useGlobalState } from "../providers/globalStateProvider/useGlobalState";
import { RenderCounter } from "./RenderCounter";

function randomNumber(): number {
  const newNumber = Math.floor(Math.random() * 100);
  return newNumber;
}

export function NumberChanger(): JSX.Element {
  const [value, setValue] = useGlobalState();

  return (
    <RenderCounter>
      <p>NumberChanger: {value}</p>
      <button onClick={() => setValue(randomNumber())}>
        New random number
      </button>
    </RenderCounter>
  );
}
