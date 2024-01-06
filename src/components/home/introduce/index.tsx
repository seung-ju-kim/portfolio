import React from 'react';
import ArrowDown from '../assets/ArrowDown.svg';

export default function Introduce() {
  return (
    <section className='landingpage font-bold'>
      <main className='z-10 text-white absolute top-1/2 left-1/2 landingMessage text-center -translate-x-1/2 -translate-y-1/3'>
        <div className='text-2xl lg:text-4xl'>
          <h1 className='mb-3 '>웹 개발자 김승주</h1>
          <h1>포트폴리오 사이트</h1>
        </div>

        <hr className='border border-t-2 my-5 w-2/3 mx-auto' />
        <div className='flex flex-col gap-3 text-2xl lg:text-3xl'>
          <span>안녕하세요 웹 개발자 김승주 입니다.</span>
          <span>새로운 기술들을 배우고 프로젝트에 적용하는 것을 좋아합니다.</span>
        </div>
        <span className='text-xl lg:text-2xl w-full border-0 bg-transparent text-white z-10 mt-20 flex flex-col justify-center items-center scrollDown'>
          더 알아보기
          <ArrowDown className='w-12 lg:w-20  h-auto' />
        </span>
      </main>
      <footer className='absolute bottom-0 h-24' />
    </section>
  );
}
