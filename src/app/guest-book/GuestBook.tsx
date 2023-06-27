'use client';

import React from 'react';

function ClosePage() {
  const _ua = window.navigator.userAgent;
  alert(_ua);
  if (_ua.toLocaleLowerCase().indexOf('kakaotalk') > -1) {
    alert('!');
    window.location.href = /iPad|iPhone|iPod/.test(_ua)
      ? 'kakaoweb://closeBrowser'
      : 'kakaotalk://inappbrowser/close';
  } else if (_ua.toLocaleLowerCase().indexOf('android') > -1) {
    alert(window.location.href);
    self.close();
  } else if (
    _ua.toLocaleLowerCase().indexOf('iphone') > -1 ||
    _ua.toLocaleLowerCase().indexOf('ipad') > -1 ||
    _ua.toLocaleLowerCase().indexOf('ipod') > -1
  ) {
    alert('!!!');
    self.close();
  } else {
    alert('!!!!');
    self.close();
  }
}

const close1 = () => {
  alert('close1');
  window.close();
};
const close2 = () => {
  self.close();
};

function GuestBook() {
  return (
    <div>
      <h1>GuestBook</h1>
      <button onClick={close1}>닫기1</button>
      <button onClick={close2}>닫기2</button>
      <button onClick={ClosePage}>ClosePage</button>
    </div>
  );
}

export default GuestBook;
