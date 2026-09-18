import { DeviceType } from "@models/device-type";
import { ScreenBreakpoint } from "@models/screen-breakpoint";

export const DEVICES_TYPES_BY_SCREEN: Record<ScreenBreakpoint, DeviceType> = {
  [ScreenBreakpoint.ExtraSmall]: DeviceType.Mobile,
  [ScreenBreakpoint.Small]: DeviceType.Mobile,
  [ScreenBreakpoint.Medium]: DeviceType.Tablet,
  [ScreenBreakpoint.Large]: DeviceType.Tablet,
  [ScreenBreakpoint.ExtraLarge]: DeviceType.Desktop,
  [ScreenBreakpoint.Huge]: DeviceType.Desktop,
};
