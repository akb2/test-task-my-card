import { URL_PATH_JOINER } from "@settings/url-path-joiner";
import { smartJoin } from "./smart-join";
import { normalizeUrl } from "./normilize-url";

export function createUrlFromPaths(mixedPaths: string[]): string;
export function createUrlFromPaths(...mixedPaths: string[]): string;
export function createUrlFromPaths(...mixedPaths: string[] | string[][]): string {
  const paths = mixedPaths.flat();
  const joiner = URL_PATH_JOINER;
  const url = smartJoin(joiner, ...paths);

  if (/http(s)?:\//i.test(url)) {
    return normalizeUrl(url).replace(/^(http(s)?:)\/+/i, "$1//");
  }

  return normalizeUrl(URL_PATH_JOINER + url);
}
