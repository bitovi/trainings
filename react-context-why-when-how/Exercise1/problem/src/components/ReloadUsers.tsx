import { useUser } from "../providers";
import { RenderCounter } from "./RenderCounter";

export function ReloadUsers(): JSX.Element {
  const { refetchUsers } = useUser();

  return (
    <RenderCounter>
      <button onClick={() => refetchUsers()}>Load new users</button>
    </RenderCounter>
  );
}
