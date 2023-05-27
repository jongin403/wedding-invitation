import classNames from 'classnames/bind';
import styles from './GlobalNavigation.module.scss';
import Link from 'next/link';

export type GlobalNavigationProps = {
  handleClickItem?: (menuName: string) => void;
};

const cx = classNames.bind(styles);

const GlobalNavigation = ({ handleClickItem }: GlobalNavigationProps) => {
  return (
    <div className={styles.globalNavigation}>
      <div className={styles.tabMenuList}>
        <Link href="/" className={styles.tabMenu}>
          <span className={styles.menuName}>메인 화면</span>
        </Link>
        <Link href="/" className={styles.tabMenu}>
          <span className={styles.menuName}>행사 정보</span>
        </Link>
        <Link href="/" className={styles.tabMenu}>
          <span className={styles.menuName}>포토 갤러리</span>
        </Link>
        <Link href="/" className={styles.tabMenu}>
          <span className={styles.menuName}>방명록</span>
        </Link>
        <Link href="/" className={styles.tabMenu}>
          <span className={styles.menuName}>고객 지원</span>
        </Link>
      </div>
    </div>
  );
};

export default GlobalNavigation;
