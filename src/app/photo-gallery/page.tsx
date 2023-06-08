import React from 'react';

import Image from 'next/image';
import { photoGalleryList } from './PhotoGallery';
import styles from './PhotoGallery.module.scss';

const PhotoGallery = () => {
  return (
    <div>
      <div>
        <section className={styles.photoList}>
          {photoGalleryList.map((elem, index) => {
            const order = index + 1;
            const photoDescription = `${order}번쨰 사진`;
            return (
              <Image
                className={styles.photoItem}
                key={index}
                src={elem.url}
                alt={photoDescription}
                width={elem.width}
                height={elem.height}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default PhotoGallery;
