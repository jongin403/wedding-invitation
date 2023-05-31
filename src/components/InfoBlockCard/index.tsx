import classNames from 'classnames/bind';
import styles from './InfoBlockCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export type InfoBlockCardProps = {
  handleClickItem?: (menuName: string) => void;
  title: string;
  subtitle: string;
  showViewMore: boolean;
};

const cx = classNames.bind(styles);

const InfoBlockCard = ({
  handleClickItem,
  title,
  subtitle,
  showViewMore,
}: InfoBlockCardProps) => {
  return (
    <div className={styles.infoBlockCard}>
      <div className={styles.textWrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        {showViewMore && <div className={styles.viewMore}>더 알아보기</div>}
      </div>
    </div>
  );
};

export default InfoBlockCard;
