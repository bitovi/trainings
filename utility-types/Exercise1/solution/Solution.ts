/*
Use the appropriate utility type to address the comments below.
*/

type Person = {
  role: "developer";
  email?: string;
  id: number;
  firstName: string;
  lastName: string;
  team: "React" | "Angular" | "backend";
};

// 1. Which utility type can we use to get rid of the errow below?
type UpdateablePerson = Partial<Person>;

// This should not give an error!
const personToUpdate: UpdateablePerson = {
  team: "React",
};

// 2. Which utility type can we use so that typescript gives an error when we try to update a property?
type NonEditablePerson = Readonly<Person>;

const nonEditablePerson: NonEditablePerson = {
  role: "developer",
  email: "string",
  id: 5,
  firstName: "string",
  lastName: "string",
  team: "React",
};

// This should give an error!
nonEditablePerson.firstName = "somethingelse";

// 3. Which utility type can we use to make sure that all properties are defined?
type FullyDefinedPerson = Required<Person>;

// This *should* give an error!
const fullyDefinedPerson: Person = {
  role: "developer",
  id: 5,
  firstName: "string",
  lastName: "string",
  team: "React",
};
