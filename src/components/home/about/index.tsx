import React from 'react';
import Call from '../assets/Call.svg';
import Location from '../assets/Location.svg';
import Mail from '../assets/Mail.svg';
import User from '../assets/User.svg';
import SectionTitle from 'components/common/SectionTitle';
const MY_INFO = [
  {Icon: User, title: '이름', content: '김승주'},
  {Icon: Call, title: '연락처', content: '010-2514-4530'},
  {Icon: Mail, title: '이메일', content: 'ksj961223@gmail.com'},
  {Icon: Location, title: '주소지', content: '서울특별시 동대문구'},
];

export default function About() {
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
