import React from 'react';

import BigInfoBlockCard from '../../components/BigInfoBlockCard/index';
import SmallInfoBlockCard from '../../components/SmallInfoBlockCard/index';
import { blockDataList1, blockDataList2 } from './WeddingInfo';
import styles from './WeddingInfo.module.scss';

const WeddingInfo = () => {
  return (
    <div>
      <div>
        <section className={styles.topIntroduce}>
          {blockDataList1.map((elem, index) => {
            return (
              <BigInfoBlockCard
                key={index}
                title={elem.title}
                subtitle={elem.subtitle}
                showViewMore={elem.showViewMore}
                imageUrl={elem.imageUrl}
                colorMode={elem.colorMode}
              ></BigInfoBlockCard>
            );
          })}
        </section>
        <section className={styles.smallGrids}>
          {blockDataList2.map((elem, index) => {
            return (
              <SmallInfoBlockCard
                key={index}
                title={elem.title}
                subtitle={elem.subtitle}
                showViewMore={elem.showViewMore}
                imageUrl={elem.imageUrl}
                colorMode={elem.colorMode}
              ></SmallInfoBlockCard>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default WeddingInfo;
