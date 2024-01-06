import React from 'react';
import SectionTitle from 'components/common/SectionTitle';
import ProjectCard from 'components/common/ProjectCard';
import {CAREER} from 'constants/career';

export default function Career() {
  return (
    <section className='py-16 bg-white flex items-center justify-center flex-col '>
      <SectionTitle title='Career' />
      <main className='flex flex-col gap-y-10 p-10'>
        {CAREER.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            title={project.title}
            description={project.description}
            period={project.period}
            contents={project.contents}
            skills={project.skills}
          />
        ))}
      </main>
    </section>
  );
}
