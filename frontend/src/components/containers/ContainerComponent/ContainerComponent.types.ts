import { EnumValues } from "@models/enum-values";
import { PropsWithChildren } from "react";

export enum ContainerSpacingSize {
  None = "none",
  Small = "small",
  Medium = "medium",
  Large = "large",
  ExtraLarge = "extra-large",
}

export interface ContainerComponentProps extends PropsWithChildren {
  $spacing?: EnumValues<ContainerSpacingSize>;
}
