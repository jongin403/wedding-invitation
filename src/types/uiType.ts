export type NavMenu = {
  name: string;
  link: string;
};

export type FooterInfo = {
  label: string;
  value: string;
};

export type ImageInfo = {
  url: string;
  width: number;
  height: number;
};

export type LogoInfo = {
  type: 'blackEn' | 'whiteEn';
  width: number;
};

export type DeviceInfoKindType = 'mobile' | 'tablet' | 'desktop';
export type DeviceInfoType = {
  width: number;
  height: number;
  kind: DeviceInfoKindType;
};

export type ScrollInfoType = {
  yOffset: number;
};
