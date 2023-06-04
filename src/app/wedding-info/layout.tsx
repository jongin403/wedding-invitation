import React from 'react';

type Props = {
  children: React.ReactNode;
};

function WeddingInfoLayout({ children }: Props) {
  return (
    <div>
      <h1>WeddingInfoLayout</h1>
      <div>{children}</div>
    </div>
  );
}

export default WeddingInfoLayout;
