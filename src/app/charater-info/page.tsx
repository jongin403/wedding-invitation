import React from 'react';
import BigInfoBlockCard from '../../components/BigInfoBlockCard/index';
import SmallInfoBlockCard from '../../components/SmallInfoBlockCard/index';
import { blockDataList1, blockDataList2 } from './CharacterInfo';

const CharacterInfo = () => {
  return (
    <div>
      <div>
        주인공 소개 페이지 입니다.
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
      </div>
    </div>
  );
};

export default CharacterInfo;
