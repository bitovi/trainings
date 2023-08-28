/*

This function is generic but not constrained, because of this, we must check for the length of list before returning.
Constrain the function type to ensure that the length exists
*/

function getLength<Type>(list: Type) {
  return Array.isArray(list);
}

getLength(7); //error Property 'length' does not exist
getLength([7, 8, 15]);
getLength({ length: 45 });

export {};
