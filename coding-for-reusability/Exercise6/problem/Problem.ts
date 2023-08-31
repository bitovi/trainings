/*Fix the Typescript error in this function, and constrain ID.

We'll need to fix the return type of the function, and constrain the generic parameter ID.

ID can be a string, a number, or an object 

Bonus: define a type or interface that will be used to constrain ID*/


//go through this and make less confusing
function identity<ID>(nameValue: string, id: ID): string {
    return {
        name: nameValue,
        identifier: id
    }
}

identity('Christina', 12345)


export {};