interface OverwriteLabelColumn {
  type: "overwrite-label";
  field: string;
  label: string;
}

interface OverwriteRenderColumn {
  type: "overwrite-render";
  field: string;
  label?: string;
  render: Function;
}

interface ExtraColumn {
  type: "extra";
  label: string;
  render: Function;
  prepend: boolean;
}

type CustomColumn = OverwriteLabelColumn | OverwriteRenderColumn | ExtraColumn;

// should error!
const overwriteLabelColumn1: CustomColumn = {
  type: "overwrite-label",
  field: "id",
  label: "ID",
  render: () => {},
};
// should not error!
const overwriteLabelColumn2: CustomColumn = {
  type: "overwrite-label",
  field: "id",
  label: "ID",
};

// should error!
const overwriteRenderColumn1: CustomColumn = {
  type: "overwrite-render",
  field: "name",
  render: () => {},
  prepend: false,
};
// should not error!
const overwriteRenderColumn2: CustomColumn = {
  type: "overwrite-render",
  field: "address",
  render: () => {},
};
// should not error!
const overwriteRenderColumn3: CustomColumn = {
  type: "overwrite-render",
  field: "employer",
  label: "Company",
  render: () => {},
};

// should error!
const extraColumn1: CustomColumn = {
  type: "extra",
  render: () => {},
};
// should not error!
const extraColumn2: CustomColumn = {
  type: "extra",
  label: "Actions",
  render: () => {},
  prepend: false,
};

function getExtraColumns(columns: CustomColumn[]): CustomColumn[] {
  return columns.filter((column) => isExtraColumn(column));
}

function isExtraColumn(column: CustomColumn): column is ExtraColumn {
  return column.type === "extra";
}
