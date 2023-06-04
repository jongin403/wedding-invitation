import React from 'react';

type Props = {
  children: React.ReactNode;
};

function CharacterInfoLayout({ children }: Props) {
  return (
    <div>
      <h1>CharacterInfoLayout</h1>
      <div>{children}</div>
    </div>
  );
}

export default CharacterInfoLayout;
