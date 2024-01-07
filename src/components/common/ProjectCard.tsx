import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
  period: string;
  contents: string[];
  repository?: string;
}

export default function ProjectCard({
  image,
  name,
  title,
  description,
  period,
  contents,
  repository,
}: ProjectCardProps) {
  return (
    <section
      className='flex flex-col lg:flex-row bg-white rounded-xl w-full text-lg'
      style={{
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      }}
    >
      <aside className='flex flex-col w-full lg:w-1/4 whitespace-nowrap justify-center items-center p-10 border-r  border-gray-300 '>
        <Image className='w-100 h-100' src={image} width={150} height={150} alt={`${name} logo`} />
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
          <span>기간: {period}</span>
          <p className='my-5  break-all'>{description}</p>
        </article>

        <hr className='my-3' />

        <article>
          <h1 className='text-xl font-bold mb-3'>개발 내용</h1>
          <ul>
            {contents.map((content) => (
              <li className={`${!content.startsWith('-') && 'font-semibold'}`} key={content}>
                {content || <br />}
              </li>
            ))}
          </ul>
        </article>
      </main>
    </section>
  );
}
