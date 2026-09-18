import type { AppRoutes } from "@models/app-routes";
import { lazy } from "react";

export const APP_ROUTES = {
  home: {
    path: "/",
    Component: lazy(() =>
      import("@pages/HomePage").then(({ HomePage }) => ({ default: HomePage })),
    ),
  },
} as const satisfies AppRoutes;
