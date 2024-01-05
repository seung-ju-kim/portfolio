import React, {useRef} from 'react';
import useMoveScroll from 'hooks/useMoveScroll';

import Star from '../assets/Star.svg';
import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';
import Certificate from './Certificate';
import Communication from './Communication';
import VersionControl from './VersionControl';
import Deployment from './Deployment';
import SectionTitle from 'components/common/SectionTitle';

const Skills = () => {
  return (
    <section className='relative py-16 bg-[#d3f9d8] flex justify-center flex-col items-center h-full'>
      <SectionTitle title='Skills' />

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

      <footer className='absolute bottom-0 h-24' />
    </section>
  );
};

export default Skills;
