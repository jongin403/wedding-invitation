'use client';

import React from 'react';
import FirstStep from './FirstStep';
import InfoBlockCard, {
  InfoBlockCardProps,
} from '../../components/InfoBlockCard/index';

type Props = {};

const blockData: InfoBlockCardProps = {
  title: '놀랍도록 완벽한 결혼 생활',
  subtitle: '프로 그 이상.',
  showViewMore: true,
};

function WeddingInfo({}: Props) {
  return (
    <div>
      <h1>WeddingInfo</h1>
      <FirstStep></FirstStep>
      <InfoBlockCard
        title={blockData.title}
        subtitle={blockData.subtitle}
        showViewMore={blockData.showViewMore}
      ></InfoBlockCard>
    </div>
  );
}

export default WeddingInfo;
