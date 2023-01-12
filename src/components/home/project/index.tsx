import React from 'react';
import Star from '../assets/Star.svg';
import ProjectCard from './ProjectCard';
import * as PROJECT from 'constants/projects';

export default function Project() {
  return (
    <section className='py-16 bg-[#f1f3f5] flex items-center justify-center flex-col'>
      <header className='flex items-center mb-12'>
        <span className='mr-3'>
          <Star width={'2.2rem'} height={'2.2rem'} />
        </span>
        <span className='text-3xl font-bold border-b-2 border-black'>Project</span>
      </header>
      <main className='flex flex-col gap-y-10 p-10'>
        <ProjectCard
          image={PROJECT.IRONFLAG.image}
          name={PROJECT.IRONFLAG.name}
          title={PROJECT.IRONFLAG.title}
          description={PROJECT.IRONFLAG.description}
          period={PROJECT.IRONFLAG.period}
          contents={PROJECT.IRONFLAG.contents}
          skills={PROJECT.IRONFLAG.skills}
        />
        <ProjectCard
          image={PROJECT.CHOROK.image}
          name={PROJECT.CHOROK.name}
          title={PROJECT.CHOROK.title}
          description={PROJECT.CHOROK.description}
          period={PROJECT.CHOROK.period}
          contents={PROJECT.CHOROK.contents}
          skills={PROJECT.CHOROK.skills}
          repository={PROJECT.CHOROK.repository}
        />
        <ProjectCard
          image={PROJECT.JACKPOT.image}
          name={PROJECT.JACKPOT.name}
          title={PROJECT.JACKPOT.title}
          description={PROJECT.JACKPOT.description}
          period={PROJECT.JACKPOT.period}
          contents={PROJECT.JACKPOT.contents}
          skills={PROJECT.JACKPOT.skills}
          repository={PROJECT.JACKPOT.repository}
        />
        <ProjectCard
          image={PROJECT.KRUGER.image}
          name={PROJECT.KRUGER.name}
          title={PROJECT.KRUGER.title}
          description={PROJECT.KRUGER.description}
          period={PROJECT.KRUGER.period}
          contents={PROJECT.KRUGER.contents}
          skills={PROJECT.KRUGER.skills}
          repository={PROJECT.KRUGER.repository}
        />
      </main>
    </section>
  );
}
