import React from 'react';

import SectionTitle from 'components/common/SectionTitle';
import SkillCard from '../common/SkillCard';

const Skills = () => {
  return (
    <section className='relative py-16 bg-orange-100 flex justify-center flex-col items-center h-full'>
      <SectionTitle title='Skills' />

      <main className='grid grid-cols-1 px-5  gap-x-10 gap-y-2 w-full lg:px-40 lg:grid-cols-2'>
        <article className='flex flex-col gap-y-2'>
          <SkillCard title='FRONTEND' />
          <SkillCard title='BACKEND' />
          <SkillCard title='DATABASE' />
        </article>
        <article className='flex flex-col gap-y-2 '>
          <SkillCard title='DEPLOYMENT' />
          <SkillCard title='VERSION CONTROL' />
          <SkillCard title='COMMUNICATION' />
          <SkillCard title='CERTIFICATE' />
        </article>
      </main>

      <footer className='absolute bottom-0 h-24' />
    </section>
  );
};

export default Skills;
