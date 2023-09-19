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
type UpdateablePerson = Person; // Fix this!

// This should not give an error!
const personToUpdate1: UpdateablePerson = {
  team: "React",
};
const personToUpdate2: UpdateablePerson = {
  firstName: "John",
};

// 2. Which utility type can we use so that typescript gives an error when we try to update a property?
type NonEditablePerson = Person; // Fix this!

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
type FullyDefinedPerson = Person; // Fix this!

// This should give an error!
const fullyDefinedPerson: FullyDefinedPerson = {
  role: "developer",
  id: 5,
  firstName: "string",
  lastName: "string",
  team: "React",
};

console.info(
  personToUpdate1,
  personToUpdate2,
  nonEditablePerson,
  fullyDefinedPerson
);
