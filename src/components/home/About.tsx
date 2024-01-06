import React from 'react';

import Call from 'components/home/assets/about/Call.svg';
import Location from 'components/home/assets/about/Location.svg';
import Mail from 'components/home/assets/about/Mail.svg';
import User from 'components/home/assets/about/User.svg';
import SectionTitle from 'components/common/SectionTitle';

export default function About() {
  const MY_INFO = [
    {Icon: User, title: '이름', content: '김승주'},
    {Icon: Call, title: '연락처', content: '010-2514-4530'},
    {Icon: Mail, title: '이메일', content: 'ksj961223@gmail.com'},
    {Icon: Location, title: '주소지', content: '서울특별시 동대문구'},
  ];
  return (
    <section className='relative bg-white py-16 flex justify-center flex-col items-center h-full'>
      <SectionTitle title='About Me' />
      <main className='flex flex-wrap gap-10 text-xl my-20'>
        {MY_INFO.map((myInfo) => (
          <article className='flex mx-auto w-60' key={myInfo.content}>
            <div className='mr-4'>
              <myInfo.Icon width={'3rem'} height={'3rem'} />
            </div>
            <div className='flex flex-col'>
              <span className='font-bold'>{myInfo.title}</span>
              <span>{myInfo.content}</span>
            </div>
          </article>
        ))}
      </main>

      <footer className='absolute bottom-0 h-24' />
    </section>
  );
}
