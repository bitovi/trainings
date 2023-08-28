/*Fix the Typescript errors in this function*/

function identity<Type>(value: string, id: Type): Type {
    return {
        name: value,
        identifier: id
    }
}

identity('Christina', 12345)


export {};