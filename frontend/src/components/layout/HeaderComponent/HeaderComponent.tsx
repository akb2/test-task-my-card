import { ContainerComponent } from "@components/containers/ContainerComponent";
import { FC } from "react";
import styles from "./HeaderComponent.module.scss";
import { HeaderComponentProps } from "./HeaderComponent.types";

export const HeaderComponent: FC<HeaderComponentProps> = ({ $title, $subtitle }) => {
  return (
    <header className={styles.header}>
      <ContainerComponent $spacing="none">
        <h1 className={styles.title}>
          {$title}
          {Boolean($subtitle) && <span className={styles["sub-title"]}>{$subtitle}</span>}
        </h1>
      </ContainerComponent>
    </header>
  );
};
