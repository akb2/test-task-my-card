import { FC } from "react";
import { ButtonProps } from "./Button.types";
import { isDefined } from "@akb2/types-tools";
import { APP_ROUTES } from "@settings/app-routes";

export const Button: FC<ButtonProps> = ({ $onClick, $routerKey }) => {
  if (isDefined($onClick)) {
    return <button onClick={$onClick}>Click me</button>;
  }

  if (isDefined($routerKey)) {
    return <a href={APP_ROUTES[$routerKey].path}>Click me</a>;
  }

  throw new Error("Button must have either $onClick or $routerKey defined.");
};
