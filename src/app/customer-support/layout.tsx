import React from 'react';

type Props = {
  children: React.ReactNode;
};

function CustomerSupportLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default CustomerSupportLayout;
