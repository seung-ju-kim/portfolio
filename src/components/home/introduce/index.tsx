import React from 'react';
import ArrowDown from '../assets/ArrowDown.svg';

export default function Introduce({moveTabs}: {moveTabs: MoveTabs[]}) {
  return (
    <section className='landingpage font-bold text-2xl' ref={moveTabs[0].element}>
      <main className='z-10 text-white absolute top-1/2 left-1/2 landingMessage text-center -translate-x-1/2 -translate-y-1/3'>
        <h1 className='mb-2'>웹 개발자 김승주</h1>
        <h1>포트폴리오 사이트</h1>
        <hr className='border border-t-2 my-3 w-1/2 mx-auto' />
        <p className='text-xl'>안녕하세요 웹 개발자 김승주 입니다.</p>
        <span className='text-xl whitespace-normal'>
          새로운 기술들을 배우고 프로젝트에 적용하는 것을 좋아합니다.
        </span>
        <span className='w-full border-0 bg-transparent text-white z-10 mt-20 flex flex-col justify-center items-center scrollDown'>
          더 알아보기
          <ArrowDown width='50' height='50' />
        </span>
      </main>
      <footer className='absolute bottom-0 h-24' ref={moveTabs[1].element} />
    </section>
  );
}
