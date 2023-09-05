/*
This generic function has no constraints, and thus Typescript cannot determine if key exists in the object

Constrain the ObjectType to be an Object
Constrain Key to be a keyof ObjectType
*/

function getColor<ObjectType, Key>(colors: ObjectType, colorsKey: Key) {
    return colors[colorsKey]; 
}

getColor({favoriteColor: 'purple', leastFavoriteColor: 'pink'}, 'favoriteColor')
getColor({favoriteColor: 'green', secondFavoriteColor: 'blue'}, 'leastFavoriteColor') //this should error 

export {};