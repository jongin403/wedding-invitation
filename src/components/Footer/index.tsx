import React from 'react';

import styles from './Footer.module.scss';
import { companyName, footerInfoList } from './Footer';
import CompanyLogo from '../CompanyLogo';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <CompanyLogo type={'blackEn'} width={80} />
      <div className={styles.copyright}>
        Copyright © {companyName} 모든 권리 보유.
      </div>

      <div className={styles.footerItemList}>
        {footerInfoList.map((elem, index) => {
          const isFirstItem = index === 0;

          return (
            <>
              {!isFirstItem && <span className={styles.itemDivider}>|</span>}
              <span className={styles.footerItem} key={index}>
                {elem.label} : {elem.value}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
