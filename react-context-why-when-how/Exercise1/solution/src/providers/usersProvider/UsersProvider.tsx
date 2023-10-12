import { createContext, useEffect, useState } from "react";

const usersUrl = "https://cowbird-staging.fly.dev/groups/bitovi/mocks/getUsers";

type User = {
  id: string;
  username: string;
  name: string;
};

type State = {
  users: User[];
  refetchUsers: () => void;
};

export const UsersContext = createContext<State>({
  users: [],
  refetchUsers: () => { }
});

interface UsersProviderProps {
  children: React.ReactNode;
}

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch(usersUrl);
    const users: User[] = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        refetchUsers: fetchUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
