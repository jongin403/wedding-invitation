import classNames from 'classnames/bind';
import styles from './InfoBlockCard.module.scss';

export type InfoBlockCardProps = {
  handleClickItem?: (menuName: string) => void;
  title: string;
  subtitle: string;
  showViewMore: boolean;
  imageUrl: string;
};

const cx = classNames.bind(styles);

const InfoBlockCard = ({
  handleClickItem,
  title,
  subtitle,
  showViewMore,
  imageUrl,
}: InfoBlockCardProps) => {
  const background = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),url(${imageUrl})`,
  };

  return (
    <div className={styles.infoBlockCard} style={background}>
      <div className={styles.textWrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        {showViewMore && <div className={styles.viewMore}>더 알아보기</div>}
      </div>
    </div>
  );
};

export default InfoBlockCard;
