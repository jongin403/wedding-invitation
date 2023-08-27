import React from 'react';
import styles from './CustomerSupport.module.scss';

import QnaDropDown from '../../components/QnaDropDown';
import CarePlus from '../../components/CarePlus';

export default function CustomerSupport() {
  return (
    <div>
      <div className={styles.qnaDropDownWrap}>
        <QnaDropDown />
      </div>
      <div className={styles.carePlusWrap}>
        <CarePlus />
      </div>
    </div>
  );
}
