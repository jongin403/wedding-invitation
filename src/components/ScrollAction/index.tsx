import React from 'react';

import styles from './ScrollAction.module.scss';

import classNames from 'classnames/bind';

export type ScrollActionProps = {
  //
};

const cx = classNames.bind(styles);

const ScrollAction = () => {
  return <section className={styles.ScrollAction}></section>;
};

export default ScrollAction;
