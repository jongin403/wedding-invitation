import React from 'react';

import { BlockData } from '../../types/infoBlockType';
import styles from './SmallInfoBlockCard.module.scss';
import classNames from 'classnames/bind';

export type SmallInfoBlockCardProps = BlockData & {
  handleClickItem?: (menuName: string) => void;
};

const cx = classNames.bind(styles);

const gradient = {
  blackMode: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))`,
  whiteMode: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))`,
};

const SmallInfoBlockCard = ({
  title,
  subtitle,
  showViewMore = true,
  imageUrl,
  colorMode = 'blackMode',
}: SmallInfoBlockCardProps) => {
  const background = {
    backgroundImage: `${gradient[colorMode]},url(${imageUrl})`,
  };

  return (
    <div className={cx('smallInfoBlockCard', colorMode)} style={background}>
      <div className={styles.textWrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        {showViewMore && <div className={styles.viewMore}>더 알아보기</div>}
      </div>
    </div>
  );
};

export default SmallInfoBlockCard;
