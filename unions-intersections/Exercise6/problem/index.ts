// 1. Fix the types so the variables error where the comments
// say `should error!`, and don't error where the comments say
// `should not error!`.
// 2. Update the type-guard `isExtraColumn`.
interface OverwriteLabelColumn {
  field: string;
  label: string;
}

interface OverwriteRenderColumn {
  field: string;
  label?: string;
  render: Function;
}

interface ExtraColumn {
  label: string;
  render: Function;
  prepend: boolean;
}

type CustomColumn = OverwriteLabelColumn | OverwriteRenderColumn | ExtraColumn;

// should error!
const overwriteLabelColumn1: CustomColumn = {
  field: "id",
  label: "ID",
  render: () => {},
};
// should not error!
const overwriteLabelColumn2: CustomColumn = {
  field: "id",
  label: "ID",
};

// should error!
const overwriteRenderColumn1: CustomColumn = {
  field: "name",
  render: () => {},
  prepend: false,
};
// should not error!
const overwriteRenderColumn2: CustomColumn = {
  field: "address",
  render: () => {},
};
// should not error!
const overwriteRenderColumn3: CustomColumn = {
  field: "employer",
  label: "Company",
  render: () => {},
};

// should error!
const extraColumn1: CustomColumn = {
  render: () => {},
};
// should not error!
const extraColumn2: CustomColumn = {
  label: "Actions",
  render: () => {},
  prepend: false,
};

export function isExtraColumn(column: CustomColumn): column is ExtraColumn {
  /* TODO */
}

export function getExtraColumns(columns: CustomColumn[]): CustomColumn[] {
  return columns.filter((column) => isExtraColumn(column));
}

console.log(
  overwriteLabelColumn1,
  overwriteLabelColumn2,
  overwriteRenderColumn1,
  overwriteRenderColumn2,
  overwriteRenderColumn3,
  extraColumn1,
  extraColumn2
);