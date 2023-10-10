import { FC } from "react";
import { RenderCounter } from "../RenderCounter";

interface Props {
  onClick: () => void;
}

export const Reload: FC<Props> = ({ onClick }) => {
  return (
    <RenderCounter>
      <button onClick={onClick}>Load new users</button>
    </RenderCounter>
  );
};
