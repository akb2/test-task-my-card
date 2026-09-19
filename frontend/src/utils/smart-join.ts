import { NotDefinable } from "@akb2/types-tools";
import { escapeRegExp } from "./escape-reg-exp";

export function smartJoin(joiner: string, mixedParts: NotDefinable<string>[]): string;
export function smartJoin(joiner: string, ...mixedPaths: NotDefinable<string>[]): string;
export function smartJoin(
  joiner: string,
  ...mixedPaths: NotDefinable<string>[] | NotDefinable<string>[][]
): string {
  const parts = mixedPaths.flat();
  const escapedJoiner = escapeRegExp(joiner);
  const trimJoinerRegExp = new RegExp(`^(?:${escapedJoiner})+|(?:${escapedJoiner})+$`, "g");

  return parts
    .map((part) => part?.replace(trimJoinerRegExp, ""))
    .filter(Boolean)
    .join(joiner);
}
