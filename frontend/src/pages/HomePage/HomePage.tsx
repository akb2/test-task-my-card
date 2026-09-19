import { ContainerComponent } from "@components/containers/ContainerComponent";
import { LayoutComponent } from "@components/layout/LayoutComponent";
import { FC } from "react";

export const HomePage: FC = () => (
  <LayoutComponent $headerTitle="Andrei Kobelev" $headerSubtitle="Welcome to my homepage">
    <ContainerComponent $background="dark">Home Page Default Container</ContainerComponent>
  </LayoutComponent>
);
