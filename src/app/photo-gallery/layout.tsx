import React from 'react';
import PhotoGallery from './PhotoGallery';

type Props = {
  children: React.ReactNode;
};

function PhotoGalleryLayout({ children }: Props) {
  return (
    <div>
      <h1>PhotoGalleryLayout</h1>
      <PhotoGallery />
      <div>{children}</div>
    </div>
  );
}

export default PhotoGalleryLayout;
