'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useWindowScroll } from '../../hooks/useWindowScroll';
import styles from './ScrollAction.module.scss';

import classNames from 'classnames/bind';
import { sceneInfo, SceneInfoType } from './ScrollAction';
import ScrollVideoAction from '../ScrollVideoAction';

export type ScrollActionProps = {
  //
};

const cx = classNames.bind(styles);
const SCENE_NAME_PREFIX = 'show-scene-';
const setLayout = (
  sceneInfo: SceneInfoType[],
  scrollSection: React.MutableRefObject<null[] | HTMLDivElement[]>
) => {
  sceneInfo.forEach((element, index) => {
    element.scrollHeight = element.heightNum * window.innerHeight;
    // [TO-DO] currentElement 를 사용하지 않으면 type check 시 에러가 발생하는 문제 확인
    const currentElement = scrollSection.current[index];
    if (currentElement) {
      currentElement.style.height = `${element.scrollHeight}px`;
      element.startYpos = currentElement.offsetTop;
      element.endYpos = currentElement.offsetTop + element.scrollHeight;
    }
  });
};

const ScrollAction = () => {
  const scrollSection = useRef<null[] | HTMLDivElement[]>([]);

  const { height } = useWindowSize();
  const { yOffset } = useWindowScroll();

  useEffect(() => {
    setLayout(sceneInfo, scrollSection);
    setCurrentScene(yOffset);
  }, [scrollSection, height, yOffset]);

  // const scrollLoop = () => {};
  // useEffect(() => {
  //   console.log({
  //     yOffset,
  //   });
  // }, [yOffset]);
  const [sceneClassName, setSceneClassName] = useState('');
  const setCurrentScene = (yOffset: number) => {
    const currentIndex = sceneInfo.findIndex((element) => {
      if (!element.startYpos || !element.endYpos) {
        return false;
      }
      if (element.startYpos <= yOffset && yOffset <= element.endYpos) {
        return true;
      }
      return false;
    });

    if (0 <= currentIndex) {
      setSceneClassName(`${SCENE_NAME_PREFIX}${currentIndex}`);
    } else {
      setSceneClassName('');
    }
  };

  return (
    <section className={styles.ScrollAction}>
      <ScrollVideoAction
        startScrollTop={0}
        endScrollTop={600}
        currentScrollTop={yOffset}
      />
      <div className={cx(`${sceneClassName}`)}>
        <div
          ref={(el) => (scrollSection.current[0] = el)}
          className={cx('scroll-section-0')}
        >
          <div className={cx('description')}>scroll-section-0</div>

          <div className={cx('stickyItem', 'description')}>슬림한 바디</div>
          <div className={cx('stickyItem', 'description')}>향상된 체력</div>
          <div className={cx('stickyItem', 'description')}>
            첨단 보안 기능은 기본
          </div>
          <div className={cx('stickyItem', 'description')}>워라밸</div>
        </div>
        <div
          ref={(el) => (scrollSection.current[1] = el)}
          className={cx('scroll-section-1')}
        >
          <div className={cx('description')}>scroll-section-1</div>
          <div className={cx('stickyItem', 'description')}>
            scroll-section-1 sticky
          </div>
        </div>
        <div
          id={'scroll-section-2'}
          ref={(el) => (scrollSection.current[2] = el)}
          className={cx('scroll-section-2')}
        >
          <div className={cx('description')}>scroll-section-2</div>
          <div className={cx('stickyItem', 'description')}>
            scroll-section-2 sticky
          </div>
        </div>
        <div
          ref={(el) => (scrollSection.current[3] = el)}
          className={cx('scroll-section-3')}
        >
          <div className={cx('description')}>scroll-section-3</div>
          <div className={cx('stickyItem', 'description')}>
            scroll-section-3 sticky
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAction;
