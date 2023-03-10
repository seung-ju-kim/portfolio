import React from 'react';
import Star from '../assets/Star.svg';
import Call from '../assets/Call.svg';
import Location from '../assets/Location.svg';
import Mail from '../assets/Mail.svg';
import User from '../assets/User.svg';
const MY_INFO = [
  {Icon: User, title: '이름', content: '김승주'},
  {Icon: Call, title: '연락처', content: '010-2514-4530'},
  {Icon: Mail, title: '이메일', content: 'ksj961223@gmail.com'},
  {Icon: Location, title: '주소지', content: '서울특별시 동대문구'},
];

export default function About({moveTabs}: {moveTabs: MoveTabs[]}) {
  return (
    <section className='relative bg-white py-16 flex justify-center flex-col items-center h-full'>
      <header className='flex justify-center items-center mb-12'>
        <span className='mr-3'>
          <Star width={'2.2rem'} height={'2.2rem'} />
        </span>
        <span className='text-3xl font-bold border-b-2 border-black'>ABOUT ME</span>
      </header>

      <main className='flex flex-wrap gap-10 text-lg my-20'>
        {MY_INFO.map((myInfo) => (
          <article className='flex mx-auto w-60' key={myInfo.content}>
            <div className='mr-4'>
              <myInfo.Icon width={'2rem'} height={'2rem'} />
            </div>
            <div className='flex flex-col'>
              <span className='font-bold'>{myInfo.title}</span>
              <span>{myInfo.content}</span>
            </div>
          </article>
        ))}
      </main>

      <footer className='absolute bottom-0 h-24' ref={moveTabs[2].element} />
    </section>
  );
}
