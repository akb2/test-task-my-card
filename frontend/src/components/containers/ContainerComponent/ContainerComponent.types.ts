import { EnumValues } from "@models/enum-values";
import { PropsWithChildren } from "react";

enum ContainerSpacingSize {
  None = "none",
  Small = "small",
  Medium = "medium",
  Large = "large",
  ExtraLarge = "extra-large",
}

enum ContainerBackgoundVariant {
  Default = "default",
  ExtraLight = "extra-light",
  Light = "light",
}

export interface ContainerComponentProps extends PropsWithChildren {
  $spacing?: EnumValues<ContainerSpacingSize>;
  $background?: EnumValues<ContainerBackgoundVariant>;
}
