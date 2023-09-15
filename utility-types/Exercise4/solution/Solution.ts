/*
Create a new type, FrontendDeveloper that excludes the "backend" value from the team property.
Build on the Developer type we previously created.
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

// Fixed!
interface FrontendDeveloper extends Developer {
  team: Exclude<Developer["team"], "backend">;
}

// This should not give an error!
const brandNewDev: FrontendDeveloper = {
  email: "newHire@developer.com",
  team: "React",
  firstName: "June",
  lastName: "Jones",
  id: 8,
  role: "developer",
};

// This should give an error! "backend" is not a valid value for team.
const incorrectDev: FrontendDeveloper = {
  email: "newHire@developer.com",
  team: "backend",
  firstName: "June",
  lastName: "Jones",
  id: 8,
  role: "developer",
};

export {};
