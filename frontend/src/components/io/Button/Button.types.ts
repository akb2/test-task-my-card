import { AppRoutesKeys } from "@models/app-routes-keys";

/**
 * Button component actions types
 */

interface ButtonClickActions {
  $routerKey: never;
  $onClick: () => void;
}

interface ButtonRouterActions {
  $routerKey: AppRoutesKeys;
  $onClick: never;
}

type ButtonActions = ButtonClickActions | ButtonRouterActions;

/**
 * General button props types
 */

export type ButtonProps = ButtonActions;
