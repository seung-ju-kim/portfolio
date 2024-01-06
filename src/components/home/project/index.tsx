import React from 'react';
import ProjectCard from '../../common/ProjectCard';
import {PROJECTS} from 'constants/projects';
import SectionTitle from 'components/common/SectionTitle';

export default function Project() {
  return (
    <section className='py-16 bg-orange-100 flex items-center justify-center flex-col'>
      <SectionTitle title='Project' />
      <main className='flex flex-col gap-y-10 p-10'>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            title={project.title}
            description={project.description}
            period={project.period}
            contents={project.contents}
            repository={project.repository}
          />
        ))}
      </main>
    </section>
  );
}
