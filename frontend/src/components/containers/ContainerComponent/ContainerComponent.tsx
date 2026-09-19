import { FC } from "react";
import { classes } from "../../../utils/classes";
import styles from "./ContainerComponent.module.scss";
import { ContainerComponentProps } from "./ContainerComponent.types";

export const ContainerComponent: FC<ContainerComponentProps> = ({
  children,
  $spacing,
  $background,
  $fullHeight,
}) => {
  const containerSpacingClass = $spacing ? styles[$spacing] : styles.medium;
  const containerBackgroundClass = $background ? styles[$background] : styles.default;
  const containerFullHeightClass = $fullHeight ? styles["full-height"] : "";
  const containerBackgroundTotalClass = classes(
    styles.container__background,
    containerBackgroundClass,
    containerFullHeightClass,
  );

  return (
    <div className={containerBackgroundTotalClass}>
      <div className={classes(styles.container, containerSpacingClass)}>{children}</div>
    </div>
  );
};
