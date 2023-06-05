import React from 'react';

import BigInfoBlockCard from '../../components/BigInfoBlockCard/index';
import SmallInfoBlockCard from '../../components/SmallInfoBlockCard/index';
import { blockDataList1, blockDataList2 } from './WeddingInfo';

const WeddingInfo = () => {
  return (
    <div>
      <div>
        결혼 정보 페이지 입니다.
        {blockDataList1.map((elem, index) => {
          return (
            <BigInfoBlockCard
              key={index}
              title={elem.title}
              subtitle={elem.subtitle}
              showViewMore={elem.showViewMore}
              imageUrl={elem.imageUrl}
            ></BigInfoBlockCard>
          );
        })}
        {blockDataList2.map((elem, index) => {
          return (
            <SmallInfoBlockCard
              key={index}
              title={elem.title}
              subtitle={elem.subtitle}
              showViewMore={elem.showViewMore}
              imageUrl={elem.imageUrl}
            ></SmallInfoBlockCard>
          );
        })}
      </div>
    </div>
  );
};

export default WeddingInfo;
