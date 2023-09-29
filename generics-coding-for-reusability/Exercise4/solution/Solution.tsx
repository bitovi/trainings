function getLength<Type extends { length: number }>(list: Type): number {
  return list.length;
}

//@ts-expect-error
getLength(7);
getLength([7, 8, 15]);
getLength({ length: 45 });
getLength("ber");
