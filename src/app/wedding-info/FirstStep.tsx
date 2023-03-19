'use client';

import React from 'react';
import Image from 'next/image';
import FirstStepStyle from './FirstStep.style';

type Props = {};

export default function FirstStep({}: Props) {
  return (
    <FirstStepStyle>
      <div className="title">000 X 000 우리 결혼 합니다.</div>
      <Image
        src="/photo/sample_photo01.jpeg"
        alt="첫 번째 사진"
        width={400}
        height={500}
      ></Image>
    </FirstStepStyle>
  );
}
