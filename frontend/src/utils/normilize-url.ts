import { URL_PATH_JOINER } from "@settings/url-path-joiner";

export const normalizeUrl = (url: string): string => url.replace(/[\/\\]+/gim, URL_PATH_JOINER);
