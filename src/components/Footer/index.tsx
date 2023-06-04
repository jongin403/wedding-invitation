import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Footer = ({}) => {
  return <div className={styles.footer}>푸터</div>;
};

export default Footer;
