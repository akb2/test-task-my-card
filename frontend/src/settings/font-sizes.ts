import { ScreenBreakpoint } from "@models/screen-breakpoint";

export const FONT_SIZES: Record<ScreenBreakpoint, number> = {
  [ScreenBreakpoint.ExtraSmall]: 0.7,
  [ScreenBreakpoint.Small]: 0.9,
  [ScreenBreakpoint.Medium]: 1.1,
  [ScreenBreakpoint.Large]: 1.4,
  [ScreenBreakpoint.ExtraLarge]: 1.7,
  [ScreenBreakpoint.Huge]: 2.2,
};
