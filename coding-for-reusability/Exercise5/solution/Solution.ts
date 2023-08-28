// function getProperty<Type extends object , Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
//     return obj[key];
// }

getProperty({firstKey: 'firstKey', secondKey: 'secondKey'}, 'firstKey')