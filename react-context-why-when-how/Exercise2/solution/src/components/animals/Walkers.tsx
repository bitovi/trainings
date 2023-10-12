import { FC } from "react";
import { RenderCounter } from "../RenderCounter";
import { Mammals } from "./Mammals";

interface Props { }

export const Walkers: FC<Props> = () => {
  return (
    <RenderCounter>
      <h3>Walkers</h3>
      <Mammals />
    </RenderCounter>
  );
};
