import { ContainerComponent } from "@components/containers/ContainerComponent";
import { LayoutComponent } from "@components/layout/LayoutComponent";
import { FC } from "react";
import styles from "./AuthPage.module.scss";

export const AuthPage: FC = () => (
  <LayoutComponent $headerTitle="Auth Page">
    <ContainerComponent $fullHeight={true}>
      <div className={styles.content}>123</div>
    </ContainerComponent>
  </LayoutComponent>
);
