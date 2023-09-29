/*
1) Define a type and use it to constrain ID
    The type can be a string or a number

2) Create a generic type to use as the return type of the function
    The type should take one type parameter for the identifier property
*/


function formatIdentity<ID>(nameValue: string, id: ID) {
    return {
        name: nameValue,
        identifier: id
    }
}

formatIdentity('Christina', 12345)
formatIdentity<string>('Christina', '12345')
formatIdentity('Christina', { id: 12345}) //this should throw an error

export {};