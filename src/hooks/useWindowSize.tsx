// 참고 : https://velog.io/@sasha1107/리액트-반응형-화면-resize-이벤트
import { useEffect, useState } from 'react';

import { getDeviceKindByWidth } from '../utils/functions';
import { DeviceKindType } from '../types/uiType';

export const useWindowSize = () => {
  // 초기 state 값은 mobile 로 세팅
  const [deviceInfo, setDeviceInfo] = useState<DeviceKindType>('mobile');

  const handleResize = () => {
    const currentType = getDeviceKindByWidth(window.innerWidth);
    setDeviceInfo(currentType);
  };

  const unbindResizeEvent = () => {
    return window.removeEventListener('resize', () => {
      return null;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
      window.addEventListener('resize', handleResize);

      // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
      handleResize();

      // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return unbindResizeEvent;
    }
  }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행
  return deviceInfo;
};

export default useWindowSize;
