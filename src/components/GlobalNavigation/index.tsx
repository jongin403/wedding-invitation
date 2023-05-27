import classNames from 'classnames/bind';
import styles from './GlobalNavigation.module.css';
export type GlobalNavigationProps = {
  handleClickItem?: (menuName: string) => void;
  isMobile?: boolean;
};

const cx = classNames.bind(styles);

const GlobalNavigation = ({}: GlobalNavigationProps) => {
  return <div className={styles.titleNameWrap}>GlobalNavigation</div>;
};

export default GlobalNavigation;
