import React from 'react';

import styles from './CarePlus.module.scss';

const CarePlus = () => {
  return (
    <div className={styles.CarePlusWrap}>
      <div className={styles.title}>JongInCare+</div>
      <div className={styles.description}>
        제공하는 지원 등 다양한 서비스를 받아보세요.
      </div>
    </div>
  );
};

export default CarePlus;
