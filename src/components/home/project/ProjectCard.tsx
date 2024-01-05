import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
  period: string;
  contents: string[];
  skills: string[];
  repository?: string;
}

export default function ProjectCard({
  image,
  name,
  title,
  description,
  period,
  contents,
  skills,
  repository,
}: ProjectCardProps) {
  return (
    <section
      className='flex flex-col lg:flex-row bg-white rounded-xl w-full'
      style={{
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      }}
    >
      <aside className='flex flex-col w-full lg:w-1/4 whitespace-nowrap justify-center items-center p-10 border-r  border-gray-300 '>
        <Image
          className='w-auto h-auto'
          src={image}
          width={100}
          height={100}
          alt={`${name} logo`}
        />
        {repository ? (
          <a
            target='_blank'
            rel='noreferrer'
            href={repository}
            className='underline mt-3 font-bold text-lg hover:text-blue-700'
          >
            {name}
          </a>
        ) : (
          <p className='mt-3 font-bold text-lg'>{name}</p>
        )}
      </aside>

      <main className='p-10 w-full lg:w-3/4 text-gray-800'>
        <article>
          <h1 className='text-xl font-bold'>{title}</h1>
          <small>기간: {period}</small>
          <p className='my-5  break-all'>{description}</p>
        </article>

        <hr className='my-3' />

        <article>
          <h1 className='text-xl font-bold mb-3'>개발 내용</h1>
          <ul>
            {contents.map((content) => (
              <li key={content}>{content}</li>
            ))}
          </ul>
        </article>

        <hr className='my-3' />

        <article>
          <h1 className='text-xl font-bold mb-3'>사용 기술 스택</h1>
          <ul className='flex flex-wrap'>
            {skills.map((skill, index, array) => (
              <li className='mr-1' key={skill}>
                {skill}
                {index !== array.length - 1 && ','}
              </li>
            ))}
          </ul>
        </article>
      </main>
    </section>
  );
}
