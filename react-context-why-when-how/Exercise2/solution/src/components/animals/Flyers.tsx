import { FC } from "react";
import { Animal } from "./Animal";
import { RenderCounter } from "../RenderCounter";
import { useAnimals } from "../../providers";

interface Props { }

export const Flyers: FC<Props> = () => {
  const { animals } = useAnimals();

  return (
    <RenderCounter>
      <h3>Flyers</h3>
      <Animal title="Bird" name={animals.bird} />
    </RenderCounter>
  );
};
