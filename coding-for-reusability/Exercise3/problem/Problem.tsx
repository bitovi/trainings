import React from "react"
/*
Below we have sortArrayOfObjectsByKey. Currently, all types of the function parameters are any.

The function should take in:
    an array of objects
    a key to sort by
    the order to sort by.

 

Add types to the arguments and return of sortArrayOfObjectsByKey such that:
    arr is an array of objects 
    key is a key that exists in the arrobject
    sortOrder should only be able to be 1 or -1. 
    Each object in arr must contain the specified key. 

Update SortList and SortListProps similarly, except constrain
 each item to also have an id property that must be either string or number. 
 This will be the specified key that we sort by.
*/

function sortArrayOfObjectsByKey(arr, key, sortOrder) {
    return arr.sort((a, b) => {
      const _a = a[key];
      const _b = b[key];
  
      if (typeof _a === "string" && typeof _b === "string") {
        return _a.localeCompare(_b) * sortOrder;
      }
  
      if (typeof _a === "number" && typeof _b === "number") {
        return (_a - _b) * sortOrder;
      }
  
      return 0;
    });
  }
  
  const users = [
    { id: 1, name: "John", age: 21 },
    { id: 2, name: "Mary", age: 23 },
    { id: 3, name: "Andrew", age: 20 },
  ];
  
  /*
    const sortedArrOfObjects = sortArrayOfObjectsByKey(users, "age", 1);
    console.log(sortedArrOfObjects); // [{ name: 'Andrew', age: 20 }, { name: 'John', age: 21 }, { name: 'Mary', age: 23 }]
  */
  
  interface SortListProps {
    list: /* implementation details */
    sortKey: /* implementation details */
    sortOrder: /* implementation details */
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