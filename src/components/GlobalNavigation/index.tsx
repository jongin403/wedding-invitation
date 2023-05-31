import classNames from 'classnames/bind';
import styles from './GlobalNavigation.module.scss';
import Link from 'next/link';

export type GlobalNavigationProps = {
  handleClickItem?: (menuName: string) => void;
};
export type NavMenu = {
  name: string;
  link: string;
};

const cx = classNames.bind(styles);

const menuList: NavMenu[] = [
  { name: '메인 화면', link: '/' },
  { name: '행사 정보', link: '/wedding-info' },
  { name: '포토 갤러리', link: '/photo-gallery' },
  { name: '방명록', link: '/guest-book' },
  { name: '고객 지원', link: '/customer-support' },
];

const GlobalNavigation = ({ handleClickItem }: GlobalNavigationProps) => {
  return (
    <div className={styles.globalNavigation}>
      <div className={styles.tabMenuList}>
        {menuList.map((menu) => (
          <Link key={menu.name} href={menu.link} className={styles.tabMenu}>
            <span className={styles.menuName}> {menu.name} </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlobalNavigation;
