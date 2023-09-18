/* 
Create a new object type in which the keys are the ids of the users and the values are the User type.
Currently the UserMap type is unknown. Which utility type can we use here in conjunction with the Person type
to create the appropriate UserMap type?

Our UserMap should look like this:
```
    data: UserMap = {
        1: {
            role: ...
            email: ...
            firstName: ...
            ...
        }
    }
```
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

type UserMap = unknown; // Fix this!

const people: Person[] = [
  {
    role: "developer",
    email: "email@developer.com",
    firstName: "Dev",
    lastName: "Eloper",
    team: "React",
    id: 1,
  },
  {
    role: "developer",
    email: "jane@developer.com",
    firstName: "Dev",
    lastName: "Eloper",
    team: "React",
    id: 2,
  },
  {
    role: "user",
    email: "user1@developer.com",
    firstName: "Great",
    lastName: "User",
    isVerified: false,
    id: 3,
  },
  {
    role: "user",
    email: "user2@developer.com",
    firstName: "Super",
    lastName: "User",
    isVerified: false,
    id: 4,
  },
];

const userMap: UserMap = people.reduce((acc, person) => {
  acc[person.id] = { ...person };
  return acc;
}, {});

console.log(userMap);

export {};
