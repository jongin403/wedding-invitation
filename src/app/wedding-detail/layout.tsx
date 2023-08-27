import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: '| 행사 상세',
};

function WeddingDetailLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default WeddingDetailLayout;
