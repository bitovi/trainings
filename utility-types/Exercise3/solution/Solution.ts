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

type UserMap = Record<Person["email"], Person>

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
      firstName: "Jane",
      lastName: "Doe",
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

const userMap: UserMap = people.reduce((acc, person) => {
    acc[person.email] = {...person}
    return acc
}, {})



console.log(userMap)

export {}