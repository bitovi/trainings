import { RenderCounter } from "../RenderCounter";

export function Animal({ title, name }: { title: string; name: string }) {
  return (
    <RenderCounter>
      {title}: {name}
    </RenderCounter>
  );
}
