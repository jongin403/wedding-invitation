export type SceneInfoType = {
  key: number;
  type: 'sticky' | 'normal';
  objectId: string;
  heightNum: number;
  scrollHeight?: number;
  startYpos?: number;
  endYpos?: number;
};

export const sceneInfo: SceneInfoType[] = [
  {
    key: 0,
    objectId: 'scroll-section-1',
    type: 'sticky',
    heightNum: 5,
  },
  {
    key: 1,
    objectId: 'scroll-section-2',
    type: 'normal',
    heightNum: 5,
  },
  {
    key: 2,
    objectId: 'scroll-section-3',
    type: 'sticky',
    heightNum: 5,
  },
  {
    key: 3,
    objectId: 'scroll-section-4',
    type: 'sticky',
    heightNum: 5,
  },
];
