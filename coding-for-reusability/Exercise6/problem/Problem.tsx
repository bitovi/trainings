import React from "react"
/*
Below we have sortArrayOfObjectsByKey. Currently, all types of the function parameters are implicitly any.

Update sortArrayOfObjectsByKey to be a generic function that takes in two type arguments.

Add types to the parameters and return of sortArrayOfObjectsByKey such that:
    itemList is an array of Objects 
    key is a property name that exists in the array Object
    sortOrder should only be able to be 1 or -1. 

Update SortList and SortListProps similarly, except constrain
 each item to also have an id property that must be either string or number. 

HINT:
sortArrayOfObjectsByKey should take two type parameters: an Object, and a type that extends keyof that object.

SortListProps should take one type argument that extends an Object that has an id property of type string | number
 */

//Update to generic function and give parameters types
function sortArrayOfObjectsByKey(itemList, key, sortOrder) {
    return itemList.sort((first, second) => {
      const firstItem = first[key];
      const secondItem = second[key];
  
      if (typeof firstItem === "string" && typeof secondItem === "string") {
        return firstItem.localeCompare(secondItem) * sortOrder;
      }
  
      if (typeof firstItem === "number" && typeof secondItem === "number") {
        return (firstItem - secondItem) * sortOrder;
      }
  
      return 0;
    });
  }
  
  
  const users = [
    { id: 1, name: "John", age: 21 },
    { id: 2, name: "Mary", age: 23 },
    { id: 3, name: "Andrew", age: 20 },
  ];
  
  //Update to generic and constrain
  interface SortListProps {
    list: /* TODO: implementation details */
    sortKey: /* TODO: implementation details */
    sortOrder: /* TODO: implementation details */
  }

  //Update to generic function and constrain
  function SortList({ list, sortKey, sortOrder }) {
    return (
      <ul>
        {sortArrayOfObjectsByKey(list, sortKey, sortOrder).map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    );
  }
  
  function SortedUsers() {
    return <SortList list={users} sortKey="age" sortOrder={1} />;
  }

  //In app code:
  <SortedUsers />

  
  //Example usage
  sortArrayOfObjectsByKey(users, 'name', -1);
  sortArrayOfObjectsByKey(
    [
      { brand: "Expo", product: "marker", id: 1 },
      { brand: "Swingline", product: "stapler", id: 2 },
    ],
    "brand",
    1
  );
  sortArrayOfObjectsByKey(users, 'product', -1);//This should error, because product does not exist in users