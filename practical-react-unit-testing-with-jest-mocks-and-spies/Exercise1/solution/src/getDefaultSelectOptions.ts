import moment from "moment";

export function getDefaultSelectOptions(): string[] {
  return [moment().year().toString()]
}