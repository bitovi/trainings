import { FC } from "react";
import { Animal } from "./Animal";
import { RenderCounter } from "../RenderCounter";

interface Props {
  cetacean: string;
  crocodilia: string;
}

export const Swimmers: FC<Props> = ({ cetacean, crocodilia }) => {
  return (
    <RenderCounter>
      <h3>Swimmers</h3>
      <Animal title="Cetacean" name={cetacean} />
      <Animal title="Crocodilia" name={crocodilia} />
    </RenderCounter>
  );
};
