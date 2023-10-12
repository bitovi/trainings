import { PropsWithChildren } from "react";
import { RenderCounter } from "./RenderCounter";
import { useGlobalState } from "../providers";

export function Consumer({ children }: PropsWithChildren<{ id?: string }>) {
  const [value] = useGlobalState();

  return (
    <RenderCounter>
      Consumer: {value}
      {children}
    </RenderCounter>
  );
}
