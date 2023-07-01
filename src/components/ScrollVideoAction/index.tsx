'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollVideoAction.module.scss';

import classNames from 'classnames/bind';
//import { sceneInfo, SceneInfoType } from './ScrollVideoAction';

export type ScrollActionProps = {
  startScrollTop: number;
  endScrollTop: number;
  currentScrollTop: number;
};

const cx = classNames.bind(styles);

const getScrollInfo = ({
  startScrollTop,
  endScrollTop,
  currentScrollTop,
}: ScrollActionProps) => {
  const scrollInfo = {
    isActive: false,
    ratio: 0,
  };
  if (startScrollTop <= currentScrollTop && currentScrollTop <= endScrollTop) {
    scrollInfo.isActive = true;
    scrollInfo.ratio = currentScrollTop / (endScrollTop - startScrollTop);
  }
  return scrollInfo;
};

type AnimateType = {
  element: HTMLDivElement;
  startValue: number;
  endValue: number;
  ratio: number;
};

const animateOpacity = ({
  element,
  startValue,
  endValue,
  ratio,
}: AnimateType) => {
  element.style.opacity = `${startValue + (endValue - startValue) * ratio}`;
};

// const animateTop = (element, startValue, endValue, ratio) => {
//   element.current.style.top = startValue + (endValue - startValue) * ratio;
// };

const animationInfoList = [
  {
    id: 'description1',
    action: {
      type: 'opacity',
      startValue: 0,
      endValue: 1,
      startRatio: 0.1,
      endRatio: 0.2,
    },
  },
  {
    id: 'description1',
    opacity: {
      startValue: 1,
      endValue: 0,
      startRatio: 0.2,
      endRatio: 0.3,
    },
  },
];

const ScrollVideoAction = ({
  startScrollTop,
  endScrollTop,
  currentScrollTop,
}: ScrollActionProps) => {
  const initialScrollInfo = getScrollInfo({
    startScrollTop,
    endScrollTop,
    currentScrollTop,
  });
  const [scrollInfo, setScrollInfo] = useState(initialScrollInfo);

  useEffect(() => {
    const _scrollInfo = getScrollInfo({
      startScrollTop,
      endScrollTop,
      currentScrollTop,
    });
    setScrollInfo(_scrollInfo);
    //setVideoPlay();
    showDescription();
  }, [startScrollTop, endScrollTop, currentScrollTop]);

  const showDescription = () => {
    if (!descElementList?.current[0]) {
      return;
    }
    const animateItem = {
      element: descElementList.current[0],
      startValue: 0,
      endValue: 1,
      ratio: scrollInfo.ratio,
    };
    animateOpacity(animateItem);
  };

  const descElementList = useRef<null[] | HTMLDivElement[]>([]);

  return (
    <section className={styles.ScrollVideoAction}>
      <div
        ref={(el) => (descElementList.current[0] = el)}
        className={cx('description0')}
      >
        슬림한 바디
      </div>
      <div
        ref={(el) => (descElementList.current[1] = el)}
        className={cx('description1')}
      >
        향상된 체력
      </div>
      <div
        ref={(el) => (descElementList.current[2] = el)}
        className={cx('description2')}
      >
        첨단 보안 기능은 기본
      </div>
      <div
        ref={(el) => (descElementList.current[3] = el)}
        className={cx('description3')}
      >
        워라밸
      </div>
    </section>
  );
};

export default ScrollVideoAction;
