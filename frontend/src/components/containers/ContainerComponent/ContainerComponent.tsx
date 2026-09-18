import { FC, ReactNode } from "react";
import { ContainerComponentProps } from "./ContainerComponent.types";
import styles from "./ContainerComponent.module.scss";

export const ContainerComponent: FC<ContainerComponentProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
