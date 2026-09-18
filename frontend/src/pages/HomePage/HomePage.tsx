import { ContainerComponent } from "@components/containers/ContainerComponent";
import { LayoutComponent } from "@components/layout/LayoutComponent";
import { FC } from "react";

export const HomePage: FC = () => (
  <LayoutComponent $headerTitle="Andrei Kobelev" $headerSubtitle="Welcome to my homepage">
    <ContainerComponent>Home Page Default Container</ContainerComponent>
    <ContainerComponent>Home Page Default Container</ContainerComponent>
    <ContainerComponent>Home Page Default Container</ContainerComponent>
    <ContainerComponent $background="extra-light">
      Home Page Extra Light Container
    </ContainerComponent>
    <ContainerComponent $background="light">Home Page Light Container</ContainerComponent>
    <ContainerComponent $background="extra-light">
      Home Page Extra Light Container
    </ContainerComponent>
    <ContainerComponent $background="extra-light">
      Home Page Extra Light Container
    </ContainerComponent>
    <ContainerComponent $background="light">Home Page Light Container</ContainerComponent>
    <ContainerComponent $background="light">Home Page Light Container</ContainerComponent>
  </LayoutComponent>
);
