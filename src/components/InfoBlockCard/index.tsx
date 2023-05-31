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
      </div>
      {/* <Image
        src="/photo/15x10_DHZ4769.jpg"
        width={600}
        height={400}
        alt="Picture of the author"
      /> */}
    </div>
  );
};

export default InfoBlockCard;
