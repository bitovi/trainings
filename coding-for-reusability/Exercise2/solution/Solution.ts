function getColor<Type extends Object , Key extends keyof Type>(colors: Type, colorsKey: Key): Type[Key] {
    return colors[colorsKey];
}

getColor({firstKey: 'firstKey', secondKey: 'secondKey'}, 'firstKey')
getColor({firstKey: 'firstKey', secondKey: 'secondKey'}, 'secondFavoriteColor')