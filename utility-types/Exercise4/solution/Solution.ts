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

interface FrontendDeveloper extends Developer {
  team: Exclude<Developer["team"], "backend">
}

//useage
const brandNewDev: FrontendDeveloper = {
  email: "newHire@developer.com",
  team: "React",
  firstName: "June",
  lastName: "Jones",
  id: 8,
  role: "developer"
}

const incorrectDev: FrontendDeveloper = {
    email: "newHire@developer.com",
    team: "backend",
    firstName: "June",
    lastName: "Jones",
    id: 8,
    role: "developer"
}


export {}