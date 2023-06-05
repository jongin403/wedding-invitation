import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: '| 행사 정보',
};

function WeddingInfoLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default WeddingInfoLayout;
