function getColor<Type extends object , Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
    return obj[key];
}

getColor({firstKey: 'firstKey', secondKey: 'secondKey'}, 'firstKey')
getColor({firstKey: 'firstKey', secondKey: 'secondKey'}, 'secondFavoriteColor')