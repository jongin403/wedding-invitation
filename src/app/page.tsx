import React from 'react';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.briefInfoWrap}>
      <div className={styles.briefInfoList}>
        <div className={styles.briefInfoItem}>
          Who?&nbsp;
          <span className={styles.pointWord}>형다은 & 정종인</span>
          &nbsp;이
        </div>
        <div className={styles.briefInfoItem}>
          What?&nbsp;
          <span className={styles.pointWord}>결혼식</span>
          &nbsp;을
        </div>
        <div className={styles.briefInfoItem}>
          When?&nbsp;
          <span className={styles.pointWord}>24년 1월 13일 (토)</span>
          &nbsp;에
        </div>
        <div className={styles.briefInfoItem}>
          Where?&nbsp;
          <span className={styles.pointWord}>아펠가모 반포</span>
          &nbsp;에서
        </div>
      </div>
    </div>
  );
};

export default Home;
