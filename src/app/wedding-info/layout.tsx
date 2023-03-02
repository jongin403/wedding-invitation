import React from 'react';
import WeddingInfo from './WeddingInfo';

type Props = {
  children: React.ReactNode;
};

function WeddingInfoLayout({ children }: Props) {
  return (
    <div>
      <h1>WeddingInfoLayout</h1>
      <WeddingInfo />
      <div>{children}</div>
    </div>
  );
}

export default WeddingInfoLayout;
