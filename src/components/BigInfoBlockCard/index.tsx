import React from 'react';

import styles from './BigInfoBlockCard.module.scss';

export type BigInfoBlockCardProps = {
  handleClickItem?: (menuName: string) => void;
  title: string;
  subtitle: string;
  showViewMore: boolean;
  imageUrl: string;
};

const BigInfoBlockCard = ({
  title,
  subtitle,
  showViewMore,
  imageUrl,
}: BigInfoBlockCardProps) => {
  const background = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),url(${imageUrl})`,
  };

  return (
    <div className={styles.bigInfoBlockCard} style={background}>
      <div className={styles.textWrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        {showViewMore && <div className={styles.viewMore}>더 알아보기</div>}
      </div>
    </div>
  );
};

export default BigInfoBlockCard;
