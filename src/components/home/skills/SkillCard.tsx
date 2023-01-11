import React from 'react';

export default function SkillCard({children, title}: {children: React.ReactNode; title: string}) {
  return (
    <div
      className='bg-white rounded-xl p-4 font-bold w-80 min-w-full '
      style={{
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      }}
    >
      <div>{title}</div>
      <div className='flex items-center flex-col'>{children}</div>
    </div>
  );
}
