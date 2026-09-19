import { NotDefinable } from "@akb2/types-tools";

export const classes = (...classNames: NotDefinable<string | false>[]) =>
  classNames.filter(Boolean).join(" ");
