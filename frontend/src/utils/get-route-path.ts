import { AppRoutesKeys } from "@models/app-routes-keys";
import { APP_ROUTES } from "@settings/app-routes";

export const getRoutePath = (key: AppRoutesKeys): string | undefined => APP_ROUTES[key]?.path;
