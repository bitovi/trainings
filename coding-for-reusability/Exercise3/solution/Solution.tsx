function sortArrayOfObjectsByKey<Data extends object, Key extends keyof Data>(
  arr: Data[],
  key: Key,
  sortOrder: -1 | 1
): Data[] {
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

//In application:
<SortedUsers />;
