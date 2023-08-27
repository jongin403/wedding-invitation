'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';
import styles from './MainCard.module.scss';

const cx = classNames.bind(styles);

const MainCard = () => {
  const router = useRouter();
  const [cardActive, setCardActive] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setCardActive(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={styles.mainCard}
      onClick={() => router.push('/wedding-info')}
      role="presentation"
    >
      <div className={styles.briefInfoWrap}>
        <div
          className={cx(
            'briefInfoList',
            'appearAnimate',
            cardActive ? 'active' : ''
          )}
        >
          <div className={styles.briefInfoItem}>
            Who?&nbsp;
            <br className={styles.mobileNewLine} />
            <span className={styles.pointWord}>형다은 & 정종인</span>
            &nbsp;이
          </div>
          <div className={styles.briefInfoItem}>
            What?&nbsp;
            <br className={styles.mobileNewLine} />
            <span className={styles.pointWord}>결혼식</span>
            &nbsp;을
          </div>
          <div className={styles.briefInfoItem}>
            When?&nbsp;
            <br className={styles.mobileNewLine} />
            <span className={styles.pointWord}>1월 13일 (토)</span>
            &nbsp;에
          </div>
          <div className={styles.briefInfoItem}>
            Where?&nbsp;
            <br className={styles.mobileNewLine} />
            <span className={styles.pointWord}>아펠가모 반포</span>
            &nbsp;에서
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
