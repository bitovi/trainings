import { useContext } from "react";
import { UsersContext } from "./UsersProvider";

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (context === undefined) {
    throw new Error(
      "User context cannot be accessed outside of the UserProvider."
    );
  }

  return context;
};
