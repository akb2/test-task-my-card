import { Undefinable } from "@akb2/types-tools";
import { AppRoutesKeys } from "@models/app-routes-keys";
import { APP_ROUTES } from "@settings/app-routes";

export const getRoutePath = (key: AppRoutesKeys): Undefinable<string> => APP_ROUTES[key]?.path;
