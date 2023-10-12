import { FC } from "react";
import { RenderCounter } from "../RenderCounter";
import { Reload } from "./Reload";

interface Props { }

export const Header: FC<Props> = () => {
  return (
    <RenderCounter>
      <h2>Animals</h2>
      <Reload />
    </RenderCounter>
  );
};
