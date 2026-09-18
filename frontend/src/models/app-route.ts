import { FC, LazyExoticComponent } from "react";

export interface AppRoute<Component extends FC = FC> {
  path: string;
  Component: LazyExoticComponent<Component>;
  props?: Component extends FC<infer P> ? Omit<P, "path" | "Component"> : null;
}
