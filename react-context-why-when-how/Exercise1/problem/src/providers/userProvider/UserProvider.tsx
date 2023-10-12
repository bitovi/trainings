import React, { createContext, useEffect, useState } from "react";

const loginUrl = "https://cowbird-staging.fly.dev/groups/bitovi/mocks/getUser";
const usersUrl = "https://cowbird-staging.fly.dev/groups/bitovi/mocks/getUsers";

type User = {
  id: string;
  username: string;
  name: string;
};

type State = {
  loggedInUser: User | null;
  users: User[];
  refetchUsers: () => void;
};

export const UserContext = createContext<State>({
  loggedInUser: null,
  users: [],
  refetchUsers: () => {}
});

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [loggedInUser, setLoggedInUser] = useState<User>();
  const [users, setUsers] = useState<User[]>();

  const fetchUsers = async () => {
    const response = await fetch(usersUrl);
    const users: User[] = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const login = async () => {
      const response = await fetch(loginUrl);
      const users: User = await response.json();
      setLoggedInUser(users);
    };
    login();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        users,
        refetchUsers: fetchUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
