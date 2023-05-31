import React from 'react';
import CustomerSupport from './CustomerSupport';

type Props = {
  children: React.ReactNode;
};

function CustomerSupportLayout({ children }: Props) {
  return (
    <div>
      <h1>CustomerSupportLayout</h1>
      <CustomerSupport />
      <div>{children}</div>
    </div>
  );
}

export default CustomerSupportLayout;
