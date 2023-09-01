function sortArrayOfObjectsByKey<Data extends Object, Key extends keyof Data>(
  itemList: Data[],
  key: Key,
  sortOrder: -1 | 1
): Data[] {
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

type SortListProps<Data extends { id: number | string }> = {
  list: Data[];
  sortKey: keyof Data;
  sortOrder: -1 | 1;
};

function SortList<Data extends { id: number | string }>({
  list,
  sortKey,
  sortOrder,
}: SortListProps<Data>) {
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
<SortedUsers />;
