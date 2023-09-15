interface Customer {
  id: string;
  fullName: string;
  lifeTimeValue: number;
}

interface Employee {
  salary: number;
  performance: "great" | "good" | "meh" | "needs training";
}

interface BoardMember {
  ownership: number;
}

type Person = (Customer & Employee) | (Customer & BoardMember) | Customer; // Fixed
// or
// type Person = Customer & (Employee | BoardMember | {})

const person1: Person = {
  id: "a33adbf2-106f-46a1-a171-aa78217f33f8",
  fullName: "John",
  lifeTimeValue: 9000,
};

const person2: Person = {
  id: "513a4f04-38db-4f1e-88e7-215679204b7a",
  fullName: "Sam",
  lifeTimeValue: 5500,
  salary: 90000,
  performance: "great",
};

const person3: Person = {
  id: "006d135a-834f-4278-9a2c-e6cfd09f46ca",
  fullName: "Jorah",
  lifeTimeValue: 2000,
  salary: 100000,
  performance: "good",
  ownership: 2,
};

// TS should give an error here because we have not satisfied the minimum Customer interface
const person4: Person = {
  fullName: "Sam",
  lifeTimeValue: 5500,
  salary: 90000,
  performance: "great",
};

const person5: Person = {
  id: "5117a909-d2ae-4a73-a553-fd20f7f043f8",
  fullName: "Daenarys",
  lifeTimeValue: 6000,
  // TS won't complain here because we have satisfied the minimum Customer interface
  performance: "great",
};
