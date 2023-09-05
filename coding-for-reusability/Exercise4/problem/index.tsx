/*

This function is generic but not constrained, because of this, we get an error when attempting to return the length property.
Constrain the function type to ensure that the length exists
*/

function getLength<Type>(list: Type) {
  return list.length;
}

getLength(7); //should error Property 'length' does not exist
getLength([7, 8, "sentence"]);
getLength({ length: 45 });
getLength("Im a string");

export {};
