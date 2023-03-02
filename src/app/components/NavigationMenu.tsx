'use client';

import React from 'react';
import Link from 'next/link';

type Props = {};

function NavigationMenu({}: Props) {
  return (
    <div>
      <h1>NavigationMenu</h1>
      <Link href="/">home</Link>
      <Link href="/wedding-info">wedding-info</Link>
      <Link href="/photo-gallery">photo-gallery</Link>
      <Link href="/guest-book">guest-book</Link>
    </div>
  );
}

export default NavigationMenu;
