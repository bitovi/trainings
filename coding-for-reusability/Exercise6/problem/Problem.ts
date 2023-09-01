/*
Define a type or interface and use it to constrain ID
ID can be a string or a number

Define a generic type (or interface) as use it as the return type of the function
*/

function formatIdentity<ID>(nameValue: string, id: ID) {
    return {
        name: nameValue,
        identifier: id
    }
}

formatIdentity('Christina', 12345)
formatIdentity<string>('Christina', "12345")
formatIdentity('Christina', { id: 12345}) //this should throw an error

export {};