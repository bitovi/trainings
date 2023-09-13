/*
    Create a new type, FrontendDeveloper that excludes the "backend" value from the team property.

    Build on the Developer type we previously created.
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

type Developer = Extract<Person, { role: "developer" }>

interface FrontendDeveloper {} //TODO: implementation details

//useage
const brandNewDev: FrontendDeveloper = {
    email: "newHire@developer.com",
    team: "React",
    firstName: "June",
    lastName: "Jones",
    id: 8,
    role: "developer"
}

//this should give us an error as "backend" is not a valid option
const incorrectDev: FrontendDeveloper = {
    email: "newHire@developer.com",
    team: "backend",
    firstName: "June",
    lastName: "Jones",
    id: 8,
    role: "developer"
}


export {}