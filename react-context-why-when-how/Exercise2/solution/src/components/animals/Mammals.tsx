import { FC } from "react";
import { Animal } from "./Animal";
import { RenderCounter } from "../RenderCounter";
import { useAnimals } from "../../providers";

interface Props { }

export const Mammals: FC<Props> = () => {
  const { animals } = useAnimals();
  const { bear, cat, cow } = animals;

  return (
    <RenderCounter>
      <h3>Mammals</h3>
      <Animal title="Bear" name={bear} />
      <Animal title="Cat" name={cat} />
      <Animal title="Cow" name={cow} />
    </RenderCounter>
  );
};
