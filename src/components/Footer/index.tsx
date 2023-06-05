import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { companyName, footerInfoList } from './Footer';

const cx = classNames.bind(styles);

const Footer = ({}) => {
  return (
    <div className={styles.footer}>
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
