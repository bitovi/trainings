function getColor<Type extends Object , Key extends keyof Type>(colors: Type, colorsKey: Key): Type[Key] {
    return colors[colorsKey];
}

getColor({favoriteColor: 'purple', leastFavoriteColor: 'pink'}, 'favoriteColor')
getColor({favoriteColor: 'purple', secondFavoriteColor: 'pink'}, 'leastFavoriteColor')