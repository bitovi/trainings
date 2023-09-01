import React from "react"
/*
Below we have sortArrayOfObjectsByKey. Currently, all types of the function parameters are any.

The function should take in:
    an array of objects
    a key to sort by (string)
    the order to sort by (number)

 
Update sortArrayOfObjects to be a generic function that takes in two parameters.

Add types to the arguments and return of sortArrayOfObjectsByKey such that:
    itemList is an array of objects 
    key is a key that exists in the array object
    sortOrder should only be able to be 1 or -1. 
    Each object in arr must contain the specified key. 

Update SortList and SortListProps similarly, except constrain
 each item to also have an id property that must be either string or number. 

HINT:
sortArrayOfObjectsByKey should take two type parameters: an object, and a type that extends keyof that object.

SortListProps should take one type parameter that extends an object that has an id property of type string | number
 */


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
  
  interface SortListProps {
    list: /* TODO: implementation details */
    sortKey: /* TODO: implementation details */
    sortOrder: /* TODO: implementation details */
  }
  
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