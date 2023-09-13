/*
1)

Using partials is helpful for many reasons, including:

Partial updates sent to PATCH endpoints

Relaxing constraints when writing test

*/

//2)

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
type ProfileData = Partial<Person>

const myProfile: ProfileData = {
    email: 'email@developer.com',
    firstName: 'Dev',
    lastName: 'Eloper',
}

export {}