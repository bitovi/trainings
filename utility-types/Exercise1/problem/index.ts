/*
1) What are some instances where we’d want to use Partial<Person>?

2) Create a type, ProfileData that is a Partial of Person for updating profile settings for the person. 
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


type ProfileData = Person //TODO: Fix this data type



//Usage:

const myProfile: ProfileData = {//This should not error after completion.
    email: 'email@developer.com',
    firstName: 'Dev',
    lastName: 'Eloper',
}

console.log(myProfile)


export {}