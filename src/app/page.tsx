import React from 'react';

type Props = {};

function Home({}: Props) {
  return (
    <>
      <div>Home</div>
      <div>홈에는 모바일 한 화면에 볼 수 있는 간략화된 정보만 들어갑니다.</div>
      <div>탭하면 메뉴를 볼 수 있는 상세정보로 들어갑니다.</div>
      <div>여기에서는 메뉴가 안보입니다.</div>
    </>
  );
}

export default Home;
