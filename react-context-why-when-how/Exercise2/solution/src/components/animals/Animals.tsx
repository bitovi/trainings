import { Walkers } from "./Walkers";
import { Flyers } from "./Flyers";
import { Swimmers } from "./Swimmers";
import { RenderCounter } from "../RenderCounter";
import { Header } from "./Header";

export function AnimalWrapper() {
  return (
    <RenderCounter>
      <Header />
      <Walkers />
      <Flyers />
      <Swimmers />
    </RenderCounter>
  );
}
