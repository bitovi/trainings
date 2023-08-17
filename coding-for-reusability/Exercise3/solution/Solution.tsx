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
  <ul>
    {sortArrayOfObjectsByKey(list, sortKey, sortOrder).map((item) => (
      <li key={item.id}>{JSON.stringify(item)}</li>
    ))}
  </ul>;
}
