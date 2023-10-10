import { FC } from "react";
import { Animal } from "./Animal";
import { RenderCounter } from "../RenderCounter";

interface Props {
  bird: string;
}

export const Flyers: FC<Props> = ({ bird }) => {
  return (
    <RenderCounter>
      <h3>Flyers</h3>
      <Animal title="Bird" name={bird} />
    </RenderCounter>
  );
};
