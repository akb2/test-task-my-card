import { FC, useMemo } from "react";
import { Route, Switch } from "wouter";
import { APP_ROUTES } from "@settings/app-routes";
import { AppRoutesKeys } from "@models/app-routes-keys";
import { AppRoute } from "@models/app-route";
import { createUrlFromPaths } from "../../../utils/create-url-from-path";

export const RouterComponent: FC = () => {
  const routes = useMemo(
    () => Object.entries(APP_ROUTES) as Array<[AppRoutesKeys, AppRoute]>,
    [APP_ROUTES],
  );

  return (
    <Switch>
      {routes.map(([key, { path, Component, props = {} }]) => (
        <Route key={key} path={createUrlFromPaths(path)} component={Component} {...props}></Route>
      ))}
    </Switch>
  );
};
