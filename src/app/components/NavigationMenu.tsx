'use client';

import React from 'react';
import Link from 'next/link';

type Props = {};

import styled from '@emotion/styled';

const SomeComp = styled.button({
  background: 'hotpink',
});

const AnotherComp = styled.button`
  background: ${(props) => props.background};
`;

function NavigationMenu({}: Props) {
  return (
    <div>
      <h1>NavigationMenu</h1>
      <AnotherComp background="green" />
      <SomeComp />
      <Link href="/">home</Link>
      <Link href="/wedding-info">wedding-info</Link>
      <Link href="/photo-gallery">photo-gallery</Link>
      <Link href="/guest-book">guest-book</Link>
    </div>
  );
}

export default NavigationMenu;
