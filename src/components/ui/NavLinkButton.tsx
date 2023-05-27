'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

type NavLinkButtonType = {
  size: 'small' | 'medium' | 'smedium' | 'mmedium';
};

const sizes = {
  small: css`
    padding-top: 9px;
    padding-bottom: 9px;
  `,
  smedium: css`
    padding-top: 13px;
    padding-bottom: 13px;
  `,
  mmedium: css`
    padding-top: 15px;
    padding-bottom: 15px;
  `,
  medium: css`
    padding-top: 17px;
    padding-bottom: 17px;
  `,
};

const NavLinkButtonStyle = styled('button')`
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  ${(props: NavLinkButtonType) => {
    return props.size ? sizes[props.size] : '';
  }}
`;

export default NavLinkButtonStyle;
