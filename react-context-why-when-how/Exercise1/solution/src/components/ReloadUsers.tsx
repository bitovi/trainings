import { useUsers } from "../providers";
import { RenderCounter } from "./RenderCounter";

export function ReloadUsers(): JSX.Element {
  const { refetchUsers } = useUsers();

  return (
    <RenderCounter>
      <button onClick={() => refetchUsers()}>Load new users</button>
    </RenderCounter>
  );
}
