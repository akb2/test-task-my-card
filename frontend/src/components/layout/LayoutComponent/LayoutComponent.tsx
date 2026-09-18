import { FC } from "react";
import { HeaderComponent } from "@components/layout/HeaderComponent";
import { LayoutComponentProps } from "./LayoutComponent.types";

export const LayoutComponent: FC<LayoutComponentProps> = ({ children }) => (
  <>
    <HeaderComponent />
    <div>{children}</div>
  </>
);
