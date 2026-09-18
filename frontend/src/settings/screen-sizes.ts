import { ScreenBreakpoint } from "@models/screen-breakpoint";

export const SCREEN_SIZES: Record<ScreenBreakpoint, number> = {
  [ScreenBreakpoint.ExtraSmall]: 0,
  [ScreenBreakpoint.Small]: 400,
  [ScreenBreakpoint.Medium]: 600,
  [ScreenBreakpoint.Large]: 900,
  [ScreenBreakpoint.ExtraLarge]: 1200,
  [ScreenBreakpoint.Huge]: 1800,
};
