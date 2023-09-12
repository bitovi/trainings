/* 
    Create a map type where the keys are emails and the values are User.

    Currently, our type, UserMap is typed as unknown.

    We have some people data that is an array of Person type.
    We want to have a mapped Object that uses the email keys of the users.

    Using the Record utility type, type UserMap.

    ex: 

    data: UserMap = {
        email@email.com: {
            role: ...
            email: ...
            firstName: ...
            ...
        }
    }
*/

type Person =
  | {
      role: "developer"
      email: string
      id: number
      firstName: string
      lastName: string
      team: "React" | "Angular" | "backend"
    }
  | {
      role: "user"
      email: string
      id: number
      firstName: string
      lastName: string
      isVerified: boolean
    }

  //TODO: implement a type
  type UserMap = unknown

//example data
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
      id: 3,
    },
  ]


//usage

const userMap: UserMap = people.reduce((acc, person) => {
    acc[person.email] = {...person}
    return acc
}, {})



console.log(userMap)

export {}