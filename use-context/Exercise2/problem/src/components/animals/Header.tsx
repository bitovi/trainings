import { FC } from "react";
import { RenderCounter } from "../RenderCounter";
import { Reload } from "./Reload";

interface Props {
  reload: () => void;
}

export const Header: FC<Props> = ({ reload }) => {
  return (
    <RenderCounter>
      <h2>Animals</h2>
      <Reload onClick={reload} />
    </RenderCounter>
  );
};
