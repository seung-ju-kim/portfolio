import React from 'react';
import Star from '../assets/Star.svg';
import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';
import Certificate from './Certificate';
import Communication from './Communication';

import VersionControl from './VersionControl';
import Deployment from './Deployment';

const Skills = ({moveTabs}: {moveTabs: MoveTabs[]}) => {
  return (
    <section className='relative py-16 bg-[#d3f9d8] flex justify-center flex-col items-center h-full'>
      <header className='flex justify-center items-center mb-12'>
        <span className='mr-3'>
          <Star width={'2.2rem'} height={'2.2rem'} />
        </span>
        <span className='text-3xl font-bold border-b-2 border-black'>SKILLS</span>
      </header>

      <main className='grid grid-cols-1 px-5  gap-x-10 gap-y-2 w-full lg:px-40 lg:grid-cols-2'>
        <article className='flex flex-col gap-y-2'>
          <Frontend />
          <Backend />
          <Database />
        </article>
        <article className='flex flex-col gap-y-2 '>
          <Deployment />
          <VersionControl />
          <Communication />
          <Certificate />
        </article>
      </main>

      <footer className='absolute bottom-0 h-24' ref={moveTabs[3].element} />
    </section>
  );
};

export default Skills;
