import { FC } from "react";
import { classes } from "../../../utils/classes";
import styles from "./ContainerComponent.module.scss";
import { ContainerComponentProps } from "./ContainerComponent.types";

export const ContainerComponent: FC<ContainerComponentProps> = ({ children, $spacing }) => {
  const containerSpacingClass = $spacing ? styles[$spacing] : styles.medium;

  return <div className={classes(styles.container, containerSpacingClass)}>{children}</div>;
};
