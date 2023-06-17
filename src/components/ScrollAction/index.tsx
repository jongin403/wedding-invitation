'use client';
import React, { useEffect, useRef } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useWindowScroll } from '../../hooks/useWindowScroll';
import styles from './ScrollAction.module.scss';

import classNames from 'classnames/bind';
import { sceneInfo, SceneInfoType } from './ScrollAction';

export type ScrollActionProps = {
  //
};

const cx = classNames.bind(styles);

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
    }
  });
};

const ScrollAction = () => {
  const scrollSection = useRef<null[] | HTMLDivElement[]>([]);

  const { height } = useWindowSize();
  const { yOffset } = useWindowScroll();

  useEffect(() => {
    setLayout(sceneInfo, scrollSection);
  }, [scrollSection, height]);

  // const scrollLoop = () => {};
  // useEffect(() => {
  //   console.log({
  //     yOffset,
  //   });
  // }, [yOffset]);

  return (
    <section className={styles.ScrollAction}>
      <div className={cx('scene', 'firstScene')}>
        <div
          id="scroll-section-1"
          ref={(el) => (scrollSection.current[0] = el)}
          className={cx('stickyItem', 'description')}
        >
          슬림한 바디
        </div>
        <div
          id="scroll-section-2"
          ref={(el) => (scrollSection.current[1] = el)}
          className={cx('stickyItem', 'description')}
        >
          향상된 체력
        </div>
        <div
          id="scroll-section-3"
          ref={(el) => (scrollSection.current[2] = el)}
          className={cx('stickyItem', 'description')}
        >
          첨단 보안 기능은 기본
        </div>
        <div
          id="scroll-section-4"
          ref={(el) => (scrollSection.current[3] = el)}
          className={cx('stickyItem', 'description')}
        >
          워라밸
        </div>
      </div>
    </section>
  );
};

export default ScrollAction;
