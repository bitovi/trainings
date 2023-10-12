import { FC } from "react";
import { RenderCounter } from "../RenderCounter";
import { Mammals } from "./Mammals";

interface Props {
  bear: string;
  cat: string;
  cow: string;
}

export const Walkers: FC<Props> = ({ bear, cat, cow }) => {
  return (
    <RenderCounter>
      <h3>Walkers</h3>
      <Mammals bear={bear} cat={cat} cow={cow} />
    </RenderCounter>
  );
};
