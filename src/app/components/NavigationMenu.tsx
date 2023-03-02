'use client';

import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

type Props = {};

function NavigationMenu({}: Props) {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `}
  `;
  return (
    <div>
      <h1>NavigationMenu</h1>
      <Button>Normal Button</Button>
      <Button className="primary">Primary Button</Button>
      <Link className="primary" href="/">
        home
      </Link>
      <Link href="/wedding-info">wedding-info</Link>
      <Link href="/photo-gallery">photo-gallery</Link>
      <Link href="/guest-book">guest-book</Link>
    </div>
  );
}

export default NavigationMenu;
