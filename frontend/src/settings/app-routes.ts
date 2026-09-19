import type { AppRoutes } from "@models/app-routes";
import { lazy } from "react";

export const APP_ROUTES = {
  home: {
    path: "",
    Component: lazy(() =>
      import("@pages/HomePage").then(({ HomePage }) => ({ default: HomePage })),
    ),
  },
  auth: {
    path: "auth",
    Component: lazy(() =>
      import("@pages/AuthPage").then(({ AuthPage }) => ({ default: AuthPage })),
    ),
  },
} as const satisfies AppRoutes;
