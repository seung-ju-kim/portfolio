import React from 'react';
import Star from 'components/home/assets/Star.svg';

const SectionTitle = ({title}: {title: string}) => {
  return (
    <header className='flex justify-center items-center mb-12'>
      <span className='mr-3'>
        <Star width={'3rem'} height={'3rem'} />
      </span>
      <span className='text-5xl font-bold border-b-2 border-black'>{title}</span>
    </header>
  );
};

export default SectionTitle;
