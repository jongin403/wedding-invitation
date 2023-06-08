import React from 'react';

type Props = {
  children: React.ReactNode;
};

function PhotoGalleryLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default PhotoGalleryLayout;
