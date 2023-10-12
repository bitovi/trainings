import { createContext, useEffect, useState } from "react";

const loginUrl = "https://cowbird-staging.fly.dev/groups/bitovi/mocks/getUser";

type User = {
  id: string;
  username: string;
  name: string;
};

type State = {
  loggedInUser: User | null;
};

export const UserContext = createContext<State>({
  loggedInUser: null,
});

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [loggedInUser, setLoggedInUser] = useState<User>();

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
        loggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
