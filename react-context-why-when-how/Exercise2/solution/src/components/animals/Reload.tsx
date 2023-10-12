import { FC } from "react";
import { RenderCounter } from "../RenderCounter";
import { useAnimals } from "../../providers";

interface Props { }

export const Reload: FC<Props> = () => {
  const { refetchAnimals } = useAnimals();

  return (
    <RenderCounter>
      <button onClick={refetchAnimals}>Load new animals</button>
    </RenderCounter>
  );
};
