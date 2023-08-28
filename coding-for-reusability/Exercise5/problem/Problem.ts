/*
This generic function has no constraints, and thus Typescript cannot determine if key exists in the obj
*/

function getProperty<Type , Key>(obj: Type, key: Key) {
    return obj[key];
}

getProperty({firstKey: 'firstKey', secondKey: 'secondKey'}, 'firstKey')
