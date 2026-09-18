import { FC } from "react";
import { classes } from "../../../utils/classes";
import styles from "./ContainerComponent.module.scss";
import { ContainerComponentProps } from "./ContainerComponent.types";

export const ContainerComponent: FC<ContainerComponentProps> = ({
  children,
  $spacing,
  $background,
}) => {
  const containerSpacingClass = $spacing ? styles[$spacing] : styles.medium;
  const containerBackgroundClass = $background ? styles[$background] : styles.default;

  return (
    <div className={classes(styles.container__background, containerBackgroundClass)}>
      <div className={classes(styles.container, containerSpacingClass)}>{children}</div>
    </div>
  );
};
