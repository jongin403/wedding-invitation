import { useEffect, useState } from 'react';

import { ScrollInfoType } from '../types/uiType';
import { throttle } from 'lodash';

const THROTTLE_INTERVAL = 100;

export const useWindowScroll = () => {
  // 초기 state 값은 mobile 로 세팅
  const [scrollInfo, setScrollInfo] = useState<ScrollInfoType>({
    yOffset: window.pageYOffset,
  });

  const handleScroll = throttle(() => {
    setScrollInfo({
      yOffset: window.pageYOffset,
    });
  }, THROTTLE_INTERVAL);

  const unbindResizeEvent = () => {
    return window.removeEventListener('resize', () => {
      return null;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      return unbindResizeEvent;
    }
  }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행
  return scrollInfo;
};

export default useWindowScroll;
