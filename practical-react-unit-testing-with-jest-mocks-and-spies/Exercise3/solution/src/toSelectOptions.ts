import { getDefaultSelectOptions } from "./getDefaultSelectOptions";

export function toSelectOptions(items: Array<string | number> = getDefaultSelectOptions()) {
  return items.map((item) => ({
    label: item.toString(),
    value: item.toString(),
  }))
}

