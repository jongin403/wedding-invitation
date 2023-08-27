import React from 'react';
import ChevronDownSolid from '../../../public/icon/chevron-down-solid.svg';
import ChevronUpSolid from '../../../public/icon/chevron-up-solid.svg';

import styles from './QnaDropDown.module.scss';

const QnaDropDown = () => {
  return (
    <div className={styles.qnaDropDownWrap}>
      <div className={styles.title}>궁금한 점이 있으신가요?</div>
      <div className={styles.qnaList}>
        <div className={styles.qnaItem}>
          <div className={styles.questionLine}>
            <div className={styles.question}>이거 왜 만들었나요?</div>
            <ChevronDownSolid
              width={24}
              height={24}
              className={styles.chevronDownSolidIcon}
            />
          </div>
          <div className={styles.answer}>
            계속해서 청첩장을 간직하고 싶어서요!
          </div>
        </div>
        <div className={styles.qnaItem}>
          <div className={styles.question}>이거 왜 만들었나요? 2</div>
          <div className={styles.answer}>
            계속해서 청첩장을 간직하고 싶어서요! 2
          </div>
        </div>
        <div className={styles.qnaItem}>
          <div className={styles.question}>이거 왜 만들었나요? 3</div>
          <div className={styles.answer}>
            계속해서 청첩장을 간직하고 싶어서요! 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnaDropDown;
