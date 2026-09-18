import { FC } from "react";
import { HeaderComponent } from "@components/layout/HeaderComponent";
import { LayoutComponentProps } from "./LayoutComponent.types";
import styles from "./LayoutComponent.module.scss";

export const LayoutComponent: FC<LayoutComponentProps> = ({ children }) => (
  <div className={styles.layout}>
    <HeaderComponent />
    <div className={styles.content}>{children}</div>
  </div>
);
