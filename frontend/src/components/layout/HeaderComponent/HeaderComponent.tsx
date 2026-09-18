import { ContainerComponent } from "@components/containers/ContainerComponent";
import { FC } from "react";
import styles from "./HeaderComponent.module.scss";

export const HeaderComponent: FC = () => {
  return (
    <header className={styles.header}>
      <ContainerComponent $spacing="none">Header</ContainerComponent>
    </header>
  );
};
