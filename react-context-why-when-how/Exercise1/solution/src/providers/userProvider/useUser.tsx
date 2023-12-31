import { useContext } from "react";
import { UserContext } from "./UserProvider";

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "User context cannot be accessed outside of the UserProvider."
    );
  }

  return context;
};
