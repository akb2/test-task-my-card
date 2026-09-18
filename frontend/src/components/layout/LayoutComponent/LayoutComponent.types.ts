import { PropsWithChildren } from "react";

export interface LayoutComponentProps extends PropsWithChildren {
  $headerTitle: string;
  $headerSubtitle?: string;
}
