import { FC } from "react";
import { Animal } from "./Animal";
import { RenderCounter } from "../RenderCounter";

interface Props {
  bear: string;
  cat: string;
  cow: string;
}

export const Mammals: FC<Props> = ({ bear, cat, cow }) => {
  return (
    <RenderCounter>
      <h3>Mammals</h3>
      <Animal title="Bear" name={bear} />
      <Animal title="Cat" name={cat} />
      <Animal title="Cow" name={cow} />
    </RenderCounter>
  );
};
