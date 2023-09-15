/*
Expanding on the implementation of FrontendDeveloper:
Create a new type, AdminDeveloper: the role property should replaced by a permissions array.
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

type Developer = Extract<Person, { role: "developer" }>;

interface FrontendDeveloper extends Developer {
  team: Exclude<Developer["team"], "backend">;
}

const brandNewDev: FrontendDeveloper = {
  email: "newHire@developer.com",
  team: "React",
  firstName: "June",
  lastName: "Jones",
  id: 8,
  role: "developer",
};

// Fixed!
interface AdminDeveloper extends Omit<FrontendDeveloper, "role"> {
  permissions: string[];
}

// This should not give an error!
const myAdmin: AdminDeveloper = {
  permissions: ["readData", "writeData"],
  ...brandNewDev,
};

// This should give an error!
myAdmin.role;

console.log(myAdmin);

export {};
