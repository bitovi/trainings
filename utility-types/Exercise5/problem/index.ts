/*
    Expanding on the implementation of FrontendDeveloper:
        Create a type based on Developer where role is replaced by a permissions array
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

//TODO: implementation details
interface Admin extends FrontendDeveloper {}

//useage

//permissions should not cause an error
const myAdmin: Admin = {
  permissions: ["readData", "writeData"],
  ...brandNewDev,
};

//role should not exist
myAdmin.role;

console.log(myAdmin);

export {};
