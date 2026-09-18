import { ContainerComponent } from "@components/containers/ContainerComponent";
import { LayoutComponent } from "@components/layout/LayoutComponent";
import { FC } from "react";

export const HomePage: FC = () => (
  <LayoutComponent>
    <ContainerComponent>Home Page</ContainerComponent>
  </LayoutComponent>
);
