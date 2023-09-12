/*
Create a new Developer type from Person that will extract the object with role: "developer"
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

type Developer = unknown

const newDev: Developer = {
    email: 'email@developer.com',
    firstName: 'Dev',
    lastName: 'Eloper',
    team: 'React',
    id: 4,
    isVerified: true //This should throw an error
}

console.log(newDev)

export {}
