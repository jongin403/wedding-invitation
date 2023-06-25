import React from 'react';

import styles from './CompanyLogo.module.scss';
import BlackLogoEn from '../../../public/logo//black_logo_en.svg';
import WhiteLogoEn from '../../../public/logo//white_logo_en.svg';
import { LogoInfo } from '../../types/uiType';

const CompanyLogo = ({ type, width }: LogoInfo) => {
  return (
    <div className={styles.companyLogoWrap}>
      {type === 'blackEn' && <BlackLogoEn width={width} />}
      {type === 'whiteEn' && <WhiteLogoEn width={width} />}
    </div>
  );
};

export default CompanyLogo;
