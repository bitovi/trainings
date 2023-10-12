import { useUser } from "../providers";
import { RenderCounter } from "./RenderCounter";

export function CurrentUser() {
  const { loggedInUser } = useUser();

  if (!loggedInUser) {
    return null;
  }

  return (
    <RenderCounter>
      <div>Current user: {loggedInUser.name}</div>
    </RenderCounter>
  );
}
