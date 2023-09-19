/*
Using a utility type and the existing Person type, extract one of the two possible types
from Person to create a new type, Developer.
*/

type Person =
  | {
      role: "developer";
      email: string;
      id: number;
      firstName: string;
      lastName: string;
      team: "React" | "Angular" | "backend";
    }
  | {
      role: "user";
      email: string;
      id: number;
      firstName: string;
      lastName: string;
      isVerified: boolean;
    };

type Developer = unknown; // Fix this!

const newDev: Developer = {
  role: "developer",
  email: "email@developer.com",
  firstName: "Dev",
  lastName: "Eloper",
  team: "React",
  id: 4,
  isVerified: true, // This should give an error!
};

console.log(newDev);

export {};
