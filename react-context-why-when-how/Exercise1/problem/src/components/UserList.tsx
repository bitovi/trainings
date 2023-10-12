import { useUser } from "../providers";
import { RenderCounter } from "./RenderCounter";

export function UserList() {
  const { users } = useUser();

  if (!users?.length) {
    return null;
  }

  return (
    <RenderCounter>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id, username }) => {
          return <li key={id}>{username}</li>;
        })}
      </ul>
    </RenderCounter>
  );
}
