import { PropsWithChildren } from "react";
import { useComplexState } from "../providers";
import { RenderCounter } from "./RenderCounter";

export function ConsumerTwo({ children }: PropsWithChildren<{ id?: string }>) {
  const { neverChange } = useComplexState();

  return (
    <RenderCounter>
      Complex State: {`${neverChange}`}
      {children}
    </RenderCounter>
  );
}
