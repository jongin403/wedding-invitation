import React from 'react';
import InfoBlockCard from '../../components/InfoBlockCard/index';
import SmallInfoBlockCard from '../../components/SmallInfoBlockCard/index';
import { blockDataList1, blockDataList2 } from './WeddingInfo';

type WeddingInfoProps = {
  //
};

const WeddingInfo = ({}: WeddingInfoProps) => {
  return (
    <div>
      <div>
        결혼 정보 페이지 입니다.
        {blockDataList1.map((elem, index) => {
          return (
            <InfoBlockCard
              key={index}
              title={elem.title}
              subtitle={elem.subtitle}
              showViewMore={elem.showViewMore}
              imageUrl={elem.imageUrl}
            ></InfoBlockCard>
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
