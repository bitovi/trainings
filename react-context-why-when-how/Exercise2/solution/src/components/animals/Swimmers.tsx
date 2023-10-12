import { FC } from "react";
import { Animal } from "./Animal";
import { RenderCounter } from "../RenderCounter";
import { useAnimals } from "../../providers";

interface Props { }

export const Swimmers: FC<Props> = () => {
  const { animals } = useAnimals();
  const { cetacean, crocodilia } = animals;

  return (
    <RenderCounter>
      <h3>Swimmers</h3>
      <Animal title="Cetacean" name={cetacean} />
      <Animal title="Crocodilia" name={crocodilia} />
    </RenderCounter>
  );
};
