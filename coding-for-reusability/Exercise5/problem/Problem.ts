/*
This generic function has no constraints, and thus Typescript cannot determine if key exists in the obj
*/

function getColor<ObjectType , Key>(colors: ObjectType, colorsKey: Key) {
    return colors[colorsKey]; 
}

getColor({favoriteColor: 'purple', leastFavoriteColor: 'pink'}, 'favoriteColor')
getColor({favoriteColor: 'green', leastFavoriteColor: 'blue'}, 'secondFavoriteColor') //this should error 

export {};