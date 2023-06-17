import { DeviceInfoKindType } from '../types/uiType';
import { MAX_MOBILE_WIDTH, MIN_DESKTOP_WIDTH } from '../utils/variables';

export const getDeviceKindByWidth = (width: number): DeviceInfoKindType => {
  if (width <= MAX_MOBILE_WIDTH) {
    return 'mobile';
  } else if (MIN_DESKTOP_WIDTH <= width) {
    return 'desktop';
  }
  return 'tablet';
};
