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

const newDev: Developer = {
    email: "string",
    id: 4,
    firstName: "string",
    lastName: "string",
    team: 'React',
    isVerified: true
}


console.log(newDev)

export {}