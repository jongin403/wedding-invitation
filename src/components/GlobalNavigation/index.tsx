import React from 'react';

import styles from './GlobalNavigation.module.scss';
import Link from 'next/link';
import { NavMenu } from '../../types/uiType';

export type GlobalNavigationProps = {
  handleClickItem?: (menuName: string) => void;
};

const menuList: NavMenu[] = [
  { name: '메인 화면', link: '/' },
  { name: '행사 정보', link: '/wedding-info' },
  { name: '주인공 소개', link: '/charater-info' },
  { name: '포토 갤러리', link: '/photo-gallery' },
  { name: '방명록', link: '/guest-book' },
  { name: '고객 지원', link: '/customer-support' },
];

const GlobalNavigation = () => {
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
